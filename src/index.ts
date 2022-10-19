// @ts-nocheck
/**
 * @description Import VDM-Services from sub-folders and provide it as exportable object to package consumers
 *              !!! Typescript checks are deactivated for this file, due to dependencies check while VDM creation !!!
 * @tutorial import use a wildcard (*) and point to the new generated services within the sdk-vdm-services folder
 * @tutorial export add the new object as member of the export array
 *
 */
import * as brsService from './sdk-vdm-services/SAP_CF_BusinessRules_Runtime_V2';

export {
    brsService
}

await brsService.InvokeRuleServiceApi.invokeWorkingsetRuleService({
    RuleServiceId: '123',
    Vocabulary: {
        'my': 'vocabulary'
    }
}).execute({destinationName: 'DestinationToBRS'});