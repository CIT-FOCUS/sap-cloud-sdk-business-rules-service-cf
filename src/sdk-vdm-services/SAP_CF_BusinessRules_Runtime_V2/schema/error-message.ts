/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'ErrorMessage' schema.
     */
    export type ErrorMessage = {
      'error'?: {
            /**
             * Error code
             */
            'code'?: string;
            /**
             * Description of the error
             */
            'message'?: string;
            /**
             * Details of the error
             */
            'details'?: {
                  /**
                   * severity of the problecm. for example, error or warning etc.
                   */
                  'severity'?: string;
                  /**
                   * details of the problem.
                   */
                  'message'?: string;
                } | Record<string, any>[];
          } | Record<string, any>;
    } | Record<string, any>;
