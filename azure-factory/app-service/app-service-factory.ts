import { resources } from "@pulumi/azure-native";
import { AppServicePlan, WebApp } from "@pulumi/azure-native/web";
import { AzureFactory } from "../azure-factory";
import * as pulumi from "@pulumi/pulumi";
import { NamingStandard } from "../../helper-methods/naming-methods";


export class AppServiceFactory extends AzureFactory{

    constructor(){
        super();
    }
create(resourceGroup: resources.ResourceGroup, name: string): pulumi.CustomResource {
    return new AppServicePlan(
        NamingStandard.getInstance().PulumiAppServicePlan(name),
        {
            resourceGroupName: resourceGroup.name,
            sku: {
                name: this.aspSize,
                tier: this.aspTier,
                size: this.aspSize,
                capacity: this.aspCapacity
            },
            tags: this.tags
        }
    )
}
}