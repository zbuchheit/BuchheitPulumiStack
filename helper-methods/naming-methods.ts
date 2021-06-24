import * as pulumi from "@pulumi/pulumi";
import { RESOURCE_CONFIG } from "../constants/config-const";


export class NamingStandard {

    private appName: pulumi.Input<string>;
    private environment: string;
    private appNameEnvironmentString: string;
    private storageAppNameEnvironmentString: string;
    private pulumiPrefix: string;

    constructor() {
        this.appName = RESOURCE_CONFIG.appName;
        this.environment = RESOURCE_CONFIG.env;
        this.appNameEnvironmentString = `${this.appName}-${this.environment}`;
        this.storageAppNameEnvironmentString = `${this.appName}${this.environment}`;
        this.pulumiPrefix = `pulumi-`
    }

    private BuildResourceGroupString() {
        return `rg-${this.appNameEnvironmentString}-${RESOURCE_CONFIG.resourceGroupInstance}`;
    }
    private BuildElasticPoolString(elasticPoolName: string) {
        return `ep-${this.appNameEnvironmentString}-${RESOURCE_CONFIG.resourceGroupInstance}-${elasticPoolName}`;
    }
    private BuildStorageAccountString() {
        return `st${this.storageAppNameEnvironmentString}${RESOURCE_CONFIG.storageAccountInstance}`;
    }
    private BuildAppServicePlanString(aspName: string) {
        return `asp-${this.appNameEnvironmentString}-${aspName}`;
    }
    private BuildSqlServerString(sqlServerName: string) {
        return `sql-${this.appNameEnvironmentString}-${sqlServerName}`;
    }
    private BuildSqlDatabaseString(sqlDatabaseName: string): any {
        return `sqldb-${this.appNameEnvironmentString}-${sqlDatabaseName}`;
    }
    private BuildWebAppString(appName: string) {
        return `app-${this.appNameEnvironmentString}-${appName}-${RESOURCE_CONFIG.webAppInstance}`;
    }
    

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

    SqlServer(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildSqlServerString(name)}`
    }
    PulumiSqlServer(name: string): string {
        return `${this.pulumiPrefix}${this.BuildSqlServerString(name)}`
    }

    SqlDatabase(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildSqlDatabaseString(name)}`
    }
    PulumiSqlDatabase(name: string): string {
        return `${this.pulumiPrefix}${this.BuildSqlDatabaseString(name)}`
    }

    WebApp(name: string): pulumi.Output<string> {
        return pulumi.interpolate`${this.BuildWebAppString(name)}`
    }
    PulumiWebApp(name: string): string {
        return `${this.pulumiPrefix}${this.BuildWebAppString(name)}`
    }
}