import { AzureFactory } from "../azure-factory";
import * as resources from "@pulumi/azure-native/resources";
import { NamingStandard } from "../../helper-methods/naming-methods";

export class ResourceGroupFactory extends AzureFactory{
    constructor(){
        super()
    }
    create(){
        return new resources.ResourceGroup(
            NamingStandard.getInstance().PulumiResourceGroup(),
        {
        resourceGroupName: NamingStandard.getInstance().ResourceGroup(),
        tags: this.tags
        })
    }
}