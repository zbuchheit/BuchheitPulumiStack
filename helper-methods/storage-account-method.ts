import { resources, storage } from "@pulumi/azure-native";
import { RESOURCE_CONFIG } from "../constants/config-const";
import { NamingStandard } from "./naming-methods";


export function createStorageAccount(namingStandard: NamingStandard, resourceGroup: resources.ResourceGroup){
return new storage.StorageAccount(namingStandard.PulumiStorageAccount(), {
    resourceGroupName: resourceGroup.name,
    accountName: namingStandard.StorageAccount(),
    tags: RESOURCE_CONFIG.tags,
    sku: {
        name: storage.SkuName.Standard_LRS,
    },
    kind: storage.Kind.StorageV2,
});
}
