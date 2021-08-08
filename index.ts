import { ResourceName } from "./enum/enum-resource";
import { getAzureFactory } from "./azure-factory/get-azure-factory";


const resourceGroupFactory = getAzureFactory(ResourceName.RESOURCEGROUP);
const resourceGroup = resourceGroupFactory.create();

const storageAccountFactory = getAzureFactory(ResourceName.STORAGEACCOUNT);
const storageAccount = storageAccountFactory.create(resourceGroup);

const AppServicePlanFactory = getAzureFactory(ResourceName.APPSERVICEPLAN);
const appServicePlan = AppServicePlanFactory.create(resourceGroup, 'buchheithistory');

const AppServiceFactory = getAzureFactory(ResourceName.APPSERVICE);
const appService = AppServiceFactory.create(resourceGroup, 'webclient');