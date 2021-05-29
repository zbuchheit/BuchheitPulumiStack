import * as pulumi from "@pulumi/pulumi";
import { RESOURCE_CONFIG } from "../constants/config-const";


export class NamingStandard {

    private appName: pulumi.Input<string>;
    private environment: string;
    private namingString: string;

    constructor() {
        this.appName = RESOURCE_CONFIG.appName;
        this.environment = RESOURCE_CONFIG.env;
        this.namingString = `${this.appName}-${this.environment}`
    }

    private BuildResourceGroupString() {
        return `rg-${this.namingString}-${RESOURCE_CONFIG.resourceGroupInstance}`
    }
    private BuildStorageAccountString() {
        return `st${this.namingString.replace('-','')}${RESOURCE_CONFIG.storageAccountInstance}`
    }
    ResourceGroup(): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildResourceGroupString()}`
    }
    PulumiResourceGroup() {
        return `p-${this.BuildResourceGroupString()}`
    }
    StorageAccount(): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildStorageAccountString()}`
    }
    PulumiStorageAccount() {
        return `p-${this.BuildStorageAccountString()}`
    }
}