import { resources } from "@pulumi/azure-native";
import { AppServicePlan, WebApp } from "@pulumi/azure-native/web";
import { RESOURCE_CONFIG } from "../constants/config-const";
import { NamingStandard } from "./naming-methods";


export function createAppServicePlan(namingStandard: NamingStandard, resourceGroup: resources.ResourceGroup, name: string) {
    return new AppServicePlan(
        namingStandard.PulumiAppServicePlan(name),
        {
            resourceGroupName: resourceGroup.name,
            sku: {
                name: RESOURCE_CONFIG.aspSize,
                tier: RESOURCE_CONFIG.aspTier,
                size: RESOURCE_CONFIG.aspSize,
                capacity: RESOURCE_CONFIG.aspCapacity
            },
            tags: RESOURCE_CONFIG.tags
        }
    )
}

export function createWebApp(namingStandard: NamingStandard, resourceGroup: resources.ResourceGroup, appServicePlan: AppServicePlan, name: string) {
    return new WebApp(
        namingStandard.PulumiWebApp(name), 
        {
            name: namingStandard.WebApp(name),
            resourceGroupName: resourceGroup.name,
            serverFarmId: appServicePlan.id,
            tags: RESOURCE_CONFIG.tags
        },
        {
        }
    )
}