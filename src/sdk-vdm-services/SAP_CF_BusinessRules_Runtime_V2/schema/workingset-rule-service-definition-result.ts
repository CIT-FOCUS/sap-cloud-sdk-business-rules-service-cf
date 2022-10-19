/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'WorkingsetRuleServiceDefinitionResult' schema.
     * @example {
     *   "RuleServiceId": "0207ff52b2954a84a9d50fa593812487",
     *   "RuleServiceName": "Discount",
     *   "ProjectName": "ShoppingCart",
     *   "CreatedBy": "LORIN",
     *   "CreatedOn": "2018-11-26T10:21:49Z",
     *   "ChangedBy": "LORIN",
     *   "ChangedOn": "2018-11-27T10:21:49Z"
     * }
     */
    export type WorkingsetRuleServiceDefinitionResult = {
      /**
       * Id of the rule service
       */
      'RuleServiceId'?: string;
      /**
       * Name of rule service
       */
      'RuleServiceName'?: string;
      /**
       * Project name the rule service
       */
      'ProjectName'?: string;
      /**
       * Created by of rule service
       */
      'CreatedBy'?: string;
      /**
       * Date of created on for the rule service
       */
      'CreatedOn'?: string;
      /**
       * Date of changed on for rule service
       */
      'ChangedOn'?: string;
      /**
       * Changed by of rule service
       */
      'ChangedBy'?: string;
    } | Record<string, any>;
