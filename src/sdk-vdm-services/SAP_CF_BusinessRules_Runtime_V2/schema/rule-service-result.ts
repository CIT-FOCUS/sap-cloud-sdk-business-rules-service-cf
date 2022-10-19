/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'RuleServiceResult' schema.
     * @example {
     *   "Result": [
     *     {
     *       "EmployeeDiscount": {
     *         "name": "John",
     *         "discount": "10"
     *       }
     *     }
     *   ]
     * }
     */
    export type RuleServiceResult = {
      /**
       * Result for rule service invocation
       */
      'Result'?: Record<string, any>[];
    } | Record<string, any>;
