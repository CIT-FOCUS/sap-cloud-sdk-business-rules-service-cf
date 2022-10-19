# @cit-focus/sap-cloud-sdk-business-rules-service-cf
This package contains the OpenAPI client for the [SAP Business Rules Execution v2 API on Cloud Foundry](https://api.sap.com/api/SAP_CF_BusinessRules_Runtime_V2/overview). This API uses the SAP Business Rules service. With the API, you can, for example, execute a Business Rule Set.

Note (relevant only for SAP API Business Hub): For authentication purposes, the API uses OAuth 2.0 security (with JSON Web Token, JWT). Thus, "Try Out" only works with an explicitly configured environment. For more information on how to obtain the necessary parameters, please see Determine Service Configuration Parameters in the documentation. The OAuth client you use must have [extended scopes](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/baf2847f6d1c401a83ca3a1427b8ff84.html).

Note: These APIs are designed for loosely coupled clients. This means:

If Business Rules service adds fields to responses, the API version number does not increase. Your client must ignore new fields.
The order of fields in responses and of entries in arrays may change. This applies unless the API provides an explicit means to specify the desired order.

# Usage Example
```typescript
import brsService from '@cit-focus/sap-cloud-sdk-business-rules-service-cf';

await brsService.InvokeRuleServiceApi.invokeWorkingsetRuleService({
    RuleServiceId: '123',
    Vocabulary: {
        'my': 'vocabulary'
    }
}).execute({destinationName: 'DestinationToBRS'});

```

# Motivation
Continious Learning is more required then ever for all around the BTP and SAP's mission to the Cloud. This package is filling a gap of SAPs pre-provided sap-cloud-sdk packages-portfolio and is based on the Workflow Service API SDK. It was fun setting it up and improve it every time we had to reuse it. Now it's time to share and give-back to this great SAP Community!

# Have an issue? / Contribute?
Please, let us know by filing a new Issue on github or start contributing. We really appreciate any suggestions or updates.

# License
This project is run under the licensing terms of Apache License 2.0.