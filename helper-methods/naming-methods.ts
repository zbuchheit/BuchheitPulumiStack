import * as pulumi from "@pulumi/pulumi";
import { RESOURCE_CONFIG } from "../constants/config-const";


export class NamingStandard {

    private appName: pulumi.Input<string>;
    private environment: string;
    private namingString: string;
    private storageNamingString: string;
    private pulumiPrefix: string;

    constructor() {
        this.appName = RESOURCE_CONFIG.appName;
        this.environment = RESOURCE_CONFIG.env;
        this.namingString = `${this.appName}-${this.environment}`;
        this.storageNamingString = `${this.appName}${this.environment}`;
        this.pulumiPrefix = `pulumi-`
    }

    private BuildResourceGroupString() {
        return `rg-${this.namingString}-${RESOURCE_CONFIG.resourceGroupInstance}`
    }
    private BuildStorageAccountString() {
        return `st${this.storageNamingString}${RESOURCE_CONFIG.storageAccountInstance}`
    }
    private BuildAppServicePlanString(aspName: string) {
        return `asp-${this.namingString}-${aspName}`
    }
    private BuildWebAppString(appName: string) {
        return `app-${this.namingString}-${appName}-${RESOURCE_CONFIG.webAppInstance}`
    }
    

    ResourceGroup(): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildResourceGroupString()}`
    }
    PulumiResourceGroup() {
        return `${this.pulumiPrefix}${this.BuildResourceGroupString()}`
    }

    StorageAccount(): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildStorageAccountString()}`
    }
    PulumiStorageAccount(): string {
        return `${this.pulumiPrefix}${this.BuildStorageAccountString()}`
    }

    AppServicePlan(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildAppServicePlanString(name)}`
    }
    PulumiAppServicePlan(name: string): string {
        return `${this.pulumiPrefix}${this.BuildAppServicePlanString(name)}`
    }

    WebApp(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildWebAppString(name)}`
    }
    PulumiWebApp(name: string): string {
        return `${this.pulumiPrefix}${this.BuildWebAppString(name)}`
    }
}