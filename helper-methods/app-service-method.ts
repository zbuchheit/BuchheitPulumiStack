import { resources } from "@pulumi/azure-native";
import { WebApp } from "@pulumi/azure-native/web";
import { NamingStandard } from "./naming-methods";


export function createAppService(namingStandard: NamingStandard, resourceGroup: resources.ResourceGroup, name: string) {
    return new WebApp(
        namingStandard.PulumiWebApp(name), 
        {
            name: namingStandard.WebApp(name),
            resourceGroupName: resourceGroup.name,
        }
    )
}