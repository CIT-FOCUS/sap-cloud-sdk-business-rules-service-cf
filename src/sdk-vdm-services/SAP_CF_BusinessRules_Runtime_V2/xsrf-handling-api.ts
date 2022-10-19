/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'XSRFHandlingApi'.
 * This API is part of the 'SAP_CF_BusinessRules_Runtime_V2' service.
 */
export const XSRFHandlingApi = {
  /**
   * Requests a new XSRF token for a session. This API does not generate xsrf token for OAuth based authentication.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  fetchXsrfToken: () => new OpenApiRequestBuilder<any>(
    'get',
    '/v2/xsrf-token'
  )
};
