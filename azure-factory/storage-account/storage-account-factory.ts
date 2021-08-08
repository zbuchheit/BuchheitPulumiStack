import { AzureFactory } from "../azure-factory";
import * as resources from "@pulumi/azure-native/resources";
import { storage } from "@pulumi/azure-native";
import { NamingStandard } from "../../helper-methods/naming-methods";

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