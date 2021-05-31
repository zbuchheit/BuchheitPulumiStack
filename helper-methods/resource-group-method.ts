import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import { NamingStandard } from "./naming-methods";

export function createResourceGroup(namingStandard: NamingStandard){
return new resources.ResourceGroup(
    namingStandard.PulumiResourceGroup(),
{
resourceGroupName: namingStandard.ResourceGroup()
}
)
}
