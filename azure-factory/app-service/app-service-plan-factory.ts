import { resources } from "@pulumi/azure-native";
import { AppServicePlan } from "@pulumi/azure-native/web";
import { NamingStandard } from "../../helper-methods/naming-methods";
import { AzureFactory } from "../azure-factory";


export class AppServicePlanFactory extends AzureFactory{

    constructor(){
        super();
    }

    create(resourceGroup: resources.ResourceGroup, name: string): AppServicePlan{
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