/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'RuleServiceVersionDefinitionResult' schema.
     * @example {
     *   "RuleServiceId": "0207ff52b2954a84a9d50fa593812487",
     *   "RuleServiceName": "Discount",
     *   "ProjectName": "ShoppingCart",
     *   "RuleServiceVersion": "000000000000000001",
     *   "RuleServiceRevision": "Tax",
     *   "CreatedBy": "LORIN",
     *   "CreatedOn": "2018-11-26T10:21:49Z"
     * }
     */
    export type RuleServiceVersionDefinitionResult = {
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
       * Version of rule service
       */
      'RuleServiceVersion'?: string;
      /**
       * Revision of the rule service
       */
      'RuleServiceRevision'?: string;
      /**
       * Date of created on for rule service
       */
      'CreatedOn'?: string;
      /**
       * Created by of rule service
       */
      'CreatedBy'?: string;
    } | Record<string, any>;
