/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { RuleServiceVersionInvocationInput, RuleServiceResult, WorkingsetRuleServiceInvocationInput } from './schema';
/**
 * Representation of the 'InvokeRuleServiceApi'.
 * This API is part of the 'SAP_CF_BusinessRules_Runtime_V2' service.
 */
export const InvokeRuleServiceApi = {
  /**
   * Invokes the deployed rule service with the specified revision or version and a specified vocabulary input.<br>If  *RuleServiceRevision* is specified, the highest semantic version of the revision is invoked.<br>
   * @param body - JSON payload of the input to rule servie execution.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  invokeRuleServiceVersion: (body: RuleServiceVersionInvocationInput) => new OpenApiRequestBuilder<RuleServiceResult>(
    'post',
    '/v2/rule-services',
    {
          body
        }
  ),
  /**
   * Invokes the deployed working set of rule service with a specified vocabulary input.
   * @param body - JSON payload of the input to rule servie execution.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  invokeWorkingsetRuleService: (body: WorkingsetRuleServiceInvocationInput) => new OpenApiRequestBuilder<RuleServiceResult>(
    'post',
    '/v2/workingset-rule-services',
    {
          body
        }
  )
};
