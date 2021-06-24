import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";
import {createResourceGroup} from "./helper-methods/resource-group-method"
import {createStorageAccount} from "./helper-methods/storage-account-method"
import { createAppServicePlan, createWebApp } from "./helper-methods/app-service-method";
import { createSqlServer, createSqlDatabase } from "./helper-methods/sql-server-method";
import { NamingStandard } from "./helper-methods/naming-methods";


const namingStandard = new NamingStandard();

// Create an Azure Resource Group
const resourceGroup = createResourceGroup(namingStandard)

// Create an Azure resource (Storage Account)
//const storageAccount = createStorageAccount(namingStandard, resourceGroup);

const appServicePlan = createAppServicePlan(namingStandard, resourceGroup, 'buchheithistory')
const appService = createWebApp(namingStandard, resourceGroup, appServicePlan, 'webclient');
const sqlServer = createSqlServer(namingStandard, resourceGroup, 'buchheithistorysql');
for (let i=1; i<4; i++){
createSqlDatabase(namingStandard, resourceGroup, sqlServer, `DB${i}`);
}


// Export the primary key of the Storage Account
// const storageAccountKeys = pulumi.all([resourceGroup.name, storageAccount.name]).apply(([resourceGroupName, accountName]) =>
//     storage.listStorageAccountKeys({ resourceGroupName, accountName }));
// export const primaryStorageKey = storageAccountKeys.keys[0].value;


