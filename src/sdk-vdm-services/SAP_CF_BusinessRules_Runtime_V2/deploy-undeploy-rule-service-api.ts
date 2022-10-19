/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { WorkingsetRuleServiceDefinitionResult, WorkingsetRuleServiceDefinitionInput, RuleServiceVersionDefinitionInput, RuleServiceVersionDefinitionResult } from './schema';
/**
 * Representation of the 'DeployUndeployRuleServiceApi'.
 * This API is part of the 'SAP_CF_BusinessRules_Runtime_V2' service.
 */
export const DeployUndeployRuleServiceApi = {
  /**
   * Retrives the metadata of all the deployed working set rule services from business rules runtime.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readWorkingsetRuleServices: () => new OpenApiRequestBuilder<WorkingsetRuleServiceDefinitionResult[]>(
    'get',
    '/v2/workingset-rule-definitions'
  ),
  /**
   * Deploys a working set rule service to the business rules runtime. The rule service should be in active state to deploy it. Redeployment is also supported.
   * @param body - JSON payload of rule service details to be deployed
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deployWorkingsetRuleService: (body: WorkingsetRuleServiceDefinitionInput) => new OpenApiRequestBuilder<WorkingsetRuleServiceDefinitionResult>(
    'post',
    '/v2/workingset-rule-definitions',
    {
          body
        }
  ),
  /**
   * Retrives the metadata of a deployed working set rule service with the specified rule service ID from the business rules runtime.
   * @param ruleServiceId - Id of the RuleService
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readWorkingsetRuleService: (ruleServiceId: string) => new OpenApiRequestBuilder<WorkingsetRuleServiceDefinitionResult>(
    'get',
    '/v2/workingset-rule-definitions/{ruleServiceId}',
    {
          pathParameters: { ruleServiceId }
        }
  ),
  /**
   * Undeploys the working set rule service with specified rule service ID from the business rules runtime.
   * @param ruleServiceId - Id of the RuleService
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  undeployWorkingsetRuleService: (ruleServiceId: string) => new OpenApiRequestBuilder<any>(
    'delete',
    '/v2/workingset-rule-definitions/{ruleServiceId}',
    {
          pathParameters: { ruleServiceId }
        }
  ),
  /**
   * Deploys a version of a rule service to the business rules runtime. Rule service versions are read only and redeployment of the same version is not possible.
   * @param body - JSON payload of rule service details to be deployed
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deployRuleServiceVersion: (body: RuleServiceVersionDefinitionInput) => new OpenApiRequestBuilder<RuleServiceVersionDefinitionResult>(
    'post',
    '/v2/rule-definitions',
    {
          body
        }
  ),
  /**
   * Retrives the list of all deployed rule service versions' metadata for the specified rule service ID from business rules runtime.
   * @param ruleServiceId - Id of the RuleService
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readRuleServiceVersions: (ruleServiceId: string) => new OpenApiRequestBuilder<RuleServiceVersionDefinitionResult[]>(
    'get',
    '/v2/rule-definitions/{ruleServiceId}/versions',
    {
          pathParameters: { ruleServiceId }
        }
  ),
  /**
   * Retrives the metadata of a deployed rule service with the specified rule service ID and rule service version from business rules runtime.
   * @param ruleServiceId - Id of the RuleService
   * @param ruleServiceVersion - Version of the RuleService
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readRuleServiceVersion: (ruleServiceId: string, ruleServiceVersion: string) => new OpenApiRequestBuilder<RuleServiceVersionDefinitionResult>(
    'get',
    '/v2/rule-definitions/{ruleServiceId}/versions/{ruleServiceVersion}',
    {
          pathParameters: { ruleServiceId, ruleServiceVersion }
        }
  ),
  /**
   * Undeploys the rule service with the specified rule service ID and rule service version from the business rules runtime.
   * @param ruleServiceId - Id of the RuleService
   * @param ruleServiceVersion - Version of the RuleService
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  undeployRuleServiceVersion: (ruleServiceId: string, ruleServiceVersion: string) => new OpenApiRequestBuilder<any>(
    'delete',
    '/v2/rule-definitions/{ruleServiceId}/versions/{ruleServiceVersion}',
    {
          pathParameters: { ruleServiceId, ruleServiceVersion }
        }
  )
};
