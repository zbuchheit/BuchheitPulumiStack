import * as pulumi from "@pulumi/pulumi";
import { resources } from "@pulumi/azure-native";
import * as azure from "@pulumi/azure";
import { RESOURCE_CONFIG } from "../constants/config-const";
import { NamingStandard } from "./naming-methods";

export function createSqlServer(namingStandard: NamingStandard, resourceGroup: resources.ResourceGroup, name: string) {
    return new azure.sql.SqlServer(
        namingStandard.PulumiSqlServer(name), {
        name: namingStandard.SqlServer(name),
        resourceGroupName: resourceGroup.name,
        version: "12.0",
        location: resourceGroup.location,
        administratorLogin: "zbchht",
        administratorLoginPassword: "testtest123",
        tags: {
            environment: "dev",
        }
        }
    )
}
export function createSqlElasticPool(namingStandard: NamingStandard, resourceGroup: resources.ResourceGroup, sqlServer:azure.sql.SqlServer, name: string){
    return new azure.mssql.ElasticPool(
        namingStandard.PulumiElasticPool(name), {
            name: namingStandard.ElasticPool(name),
            resourceGroupName: resourceGroup.name,
            serverName: sqlServer.name,
            location: resourceGroup.location,
            sku:{
                ...RESOURCE_CONFIG.sqlSettings.sku
            },
            perDatabaseSettings:{
                ...RESOURCE_CONFIG.sqlSettings.perDatabaseSettings
            }
        }
    )
}
export function createSqlDatabase(namingStandard: NamingStandard, resourceGroup: resources.ResourceGroup, sqlServer:azure.sql.SqlServer, name: string){
    return new azure.sql.Database(
        namingStandard.PulumiSqlDatabase(name), {
            name: namingStandard.SqlDatabase(name),
            resourceGroupName: resourceGroup.name,
            serverName: sqlServer.name,
        }
    )
}