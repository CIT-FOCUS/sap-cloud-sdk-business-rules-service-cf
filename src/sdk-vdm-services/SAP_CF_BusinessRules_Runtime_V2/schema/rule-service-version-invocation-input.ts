/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'RuleServiceVersionInvocationInput' schema.
     * @example {
     *   "RuleServiceId": "0207ff52b2954a84a9d50fa593812487",
     *   "RuleServiceRevision": "Tax",
     *   "Vocabulary": [
     *     {
     *       "Employee": {
     *         "id": "LORIN",
     *         "name": "John",
     *         "age": "32"
     *       },
     *       "Employer": {
     *         "id": "001",
     *         "name": "SAP"
     *       }
     *     }
     *   ]
     * }
     */
    export type RuleServiceVersionInvocationInput = {
      /**
       * Id of the rule service
       */
      'RuleServiceId': string;
      /**
       * Revision of the rule service
       */
      'RuleServiceRevision'?: string;
      /**
       * Version of the rule service
       */
      'RuleServiceVersion'?: string;
      /**
       * Input vocabulary for rule service
       */
      'Vocabulary'?: Record<string, any>[];
    } | Record<string, any>;
