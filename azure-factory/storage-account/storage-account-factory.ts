import { AzureFactory } from "../azure-factory";
import { NamingStandard } from "../../helper-methods/naming-methods";
import { resources, storage } from "@pulumi/azure-native";

export class StorageAccountFactory extends AzureFactory{
    constructor(){
        super();
        
    }
    create(resourceGroup: resources.ResourceGroup){
        return new storage.StorageAccount(NamingStandard.getInstance().PulumiStorageAccount(), {
            resourceGroupName: resourceGroup.name,
            accountName: NamingStandard.getInstance().StorageAccount(),
            tags: this.tags,
            sku: {
                name: storage.SkuName.Standard_LRS,
            },
            kind: storage.Kind.StorageV2,
        });
        }
}