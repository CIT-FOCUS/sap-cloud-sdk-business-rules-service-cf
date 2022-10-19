/**
 * create-vdm-sources
 * @description This file generates Virtuell-Data-Modell (VDM) services by using SWAGGER files within the SAP Cloud SDK
 * @tutorial swaggerFolderCollection add a new json object to the array within the folderName, created in "swaggerFiles/" folder
 */

import { generate } from '@sap-cloud-sdk/openapi-generator';

try {
    // Create your project datastructure with all sourcefiles based on your options
    generate({
        input: 'swaggerFiles/',
        outputDir: 'src/sdk-vdm-services/',
        overwrite: true, // update existing files
        clearOutputDir: true, // remove outdated files of identified sub-folder
    });
} catch (error) {
    console.log(error);
}