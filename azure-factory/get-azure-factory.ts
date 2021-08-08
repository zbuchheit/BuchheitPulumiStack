import { AzureFactory } from "./azure-factory";
import { AppServicePlanFactory } from "./app-service/app-service-plan-factory";
import { AppServiceFactory } from "./app-service/app-service-factory";
import { ResourceGroupFactory } from "./resource-group/resource-group-factory";
import { StorageAccountFactory } from "./storage-account/storage-account-factory";
import { ResourceName } from "../enum/enum-resource";

export function getAzureFactory(resourceName: ResourceName.APPSERVICEPLAN): AppServicePlanFactory;
export function getAzureFactory(resourceName: ResourceName.APPSERVICE): AppServiceFactory;
export function getAzureFactory(resourceName: ResourceName.RESOURCEGROUP): ResourceGroupFactory;
export function getAzureFactory(resourceName: ResourceName.STORAGEACCOUNT): StorageAccountFactory;
export function getAzureFactory(resourceName: ResourceName.APPSERVICE): AppServiceFactory;

export function getAzureFactory(resourceName: ResourceName): AzureFactory{
    switch(resourceName){
        case ResourceName.APPSERVICEPLAN: 
            return new AppServicePlanFactory;
            break;
        case ResourceName.APPSERVICE: 
            return new AppServiceFactory;
            break;
        case ResourceName.RESOURCEGROUP:
            return new ResourceGroupFactory;
            break; 
        case ResourceName.STORAGEACCOUNT: 
            return new StorageAccountFactory;
            break;
        default:    
            throw("Unsupported"); 
}
}