import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const staging = process.argv.includes("--staging");
const failures = [];

async function filesBelow(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    if (entry === ".git" || entry === "node_modules") continue;
    const path = join(directory, entry);
    const info = await stat(path);
    if (info.isDirectory()) files.push(...(await filesBelow(path)));
    else files.push(path);
  }
  return files;
}

const markdownFiles = (await filesBelow(root)).filter((path) => path.endsWith(".md"));

for (const path of markdownFiles) {
  const text = await readFile(path, "utf8");
  const relative = path.slice(root.length + 1);

  const privateMarkers = [
    /\/home\/david\//,
    /gdrive:/i,
    /HANDSWEBSI-\d+/,
    /CONNECTOR_NOT_CONNECTED/,
  ];
  for (const marker of privateMarkers) {
    if (marker.test(text)) failures.push(`${relative}: contains private/internal marker ${marker}`);
  }

  if (!staging && /\{\{(?:GITHUB_VIDEO_ATTACHMENT_URL|DRIVE_VIDEO_URL)\}\}/.test(text)) {
    failures.push(`${relative}: contains an unresolved video URL`);
  }
  if (!staging && /Pre-publication placeholder/.test(text)) {
    failures.push(`${relative}: contains the placeholder demo transcript`);
  }

  const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
  for (const match of text.matchAll(linkPattern)) {
    const target = match[1].split("#", 1)[0];
    if (!target || /^(?:https?:|mailto:|\{\{)/.test(target)) continue;
    const resolved = resolve(dirname(path), target);
    try {
      await stat(resolved);
    } catch {
      failures.push(`${relative}: missing local link target ${target}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Checked ${markdownFiles.length} Markdown files; publication checks passed${staging ? " in staging mode" : ""}.`);
}
