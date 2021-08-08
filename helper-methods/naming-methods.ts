import { SpringCloudAppRedisAssociation } from "@pulumi/azure/appplatform";
import * as pulumi from "@pulumi/pulumi";
import { AzureFactory } from "../azure-factory/azure-factory";


export class NamingStandard extends AzureFactory {

    private static instance: NamingStandard;
    private appNameEnvironmentString: string;
    private storageAppNameEnvironmentString: string;
    private pulumiPrefix: string;

    constructor() {
        super();
        this.appNameEnvironmentString = `${this.appName}-${this.env}`;
        this.storageAppNameEnvironmentString = `${this.appName}${this.env}`;
        this.pulumiPrefix = `pulumi-`;
    };

    public static getInstance(){
        if (!NamingStandard.instance){
            NamingStandard.instance = new NamingStandard();
        }
        return NamingStandard.instance;
    }

    private BuildResourceGroupString() {
        return `rg-${this.appNameEnvironmentString}-${this.resourceGroupInstance}`;
    };
    private BuildElasticPoolString(name: string) {
        return `ep-${this.appNameEnvironmentString}-${this.resourceGroupInstance}-${name}`;
    };
    private BuildStorageAccountString() {
        return `st${this.storageAppNameEnvironmentString}${this.storageAccountInstance}`;
    };
    private BuildAppServicePlanString(name: string) {
        return `asp-${this.appNameEnvironmentString}-${name}`;
    };
    private BuildSqlServerString(name: string) {
        return `sql-${this.appNameEnvironmentString}-${name}`;
    };
    private BuildSqlDatabaseString(sqlDatabaseName: string): any {
        return `sqldb-${this.appNameEnvironmentString}-${sqlDatabaseName}`;
    };
    private BuildWebAppString(appName: string) {
        return `app-${this.appNameEnvironmentString}-${appName}-${this.webAppInstance}`;
    };
    

    ResourceGroup(): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildResourceGroupString()}`
    };
    PulumiResourceGroup(): string {
        return `${this.pulumiPrefix}${this.BuildResourceGroupString()}`
    };

    ElasticPool(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildElasticPoolString(name)}`
    };
    PulumiElasticPool(name: string) {
        return `${this.pulumiPrefix}${this.BuildElasticPoolString(name)}`
    };

    StorageAccount(): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildStorageAccountString()}`
    };
    PulumiStorageAccount(): string {
        return `${this.pulumiPrefix}${this.BuildStorageAccountString()}`
    };

    AppServicePlan(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildAppServicePlanString(name)}`
    };
    PulumiAppServicePlan(name: string): string {
        return `${this.pulumiPrefix}${this.BuildAppServicePlanString(name)}`
    };

    SqlServer(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildSqlServerString(name)}`
    };
    PulumiSqlServer(name: string): string {
        return `${this.pulumiPrefix}${this.BuildSqlServerString(name)}`
    };

    SqlDatabase(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildSqlDatabaseString(name)}`
    };
    PulumiSqlDatabase(name: string): string {
        return `${this.pulumiPrefix}${this.BuildSqlDatabaseString(name)}`
    };

    WebApp(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildWebAppString(name)}`
    };
    PulumiWebApp(name: string): string {
        return `${this.pulumiPrefix}${this.BuildWebAppString(name)}`
    };
};