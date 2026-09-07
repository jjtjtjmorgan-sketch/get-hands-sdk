# Inference-provider testing and onboarding

Hands Router remains closed source. The SDK roadmap opens the provider-facing contract needed to integrate without exposing routing implementation, ranking, fallback policy, qualification data, credentials, or commercial terms.

## Planned provider journey

1. implement the versioned provider adapter contract;
2. declare supported capabilities and known limitations;
3. run public fixtures through a local conformance runner;
4. inspect a reproducible report that separates supported, unsupported, and failing behavior;
5. request access to the governed Hands Router test environment;
6. exercise the real test boundary within published quotas and redaction rules;
7. submit the report and operational information for onboarding review;
8. receive a trackable status and next action.

Testing will not silently enable production traffic. Technical compatibility is necessary but does not replace security, operational, legal, or commercial review.

## Authority invariant

A provider or model-route change cannot increase data access, recipients, action scope, spending, locality, or approval class. Those constraints belong to the deployed Hands environment and remain unchanged when inference is rerouted.

## Current availability

The public adapter package, local conformance runner, hosted sandbox, quotas, report schema, and onboarding endpoint are planned. They are not available through this repository today. We will publish a working endpoint only after the test path is exercised end to end and has a named operational owner.

Providers interested in an early design-partner conversation can contact [support@gethands.nl](mailto:support@gethands.nl) with the subject **Inference provider SDK**. Do not send production credentials by email or in a GitHub issue.
