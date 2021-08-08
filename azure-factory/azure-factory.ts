import * as pulumi from "@pulumi/pulumi";
import { NamingStandard } from "../helper-methods/naming-methods";


export abstract class AzureFactory{
    config: pulumi.Config;
    azconfig: pulumi.Config;
    appName: string;
    env: string;
    resourceGroupInstance: string;
    storageAccountInstance: string;
    webAppInstance: string;
    tags: {[key:string]: string}
    aspTier: string;
    aspSize: string;
    aspCapacity: number;
    sqlSettings: any;

    constructor(){
        this.config = new pulumi.Config('BuchheitHistory');
        this.azconfig = new pulumi.Config('azure-native');
        this.appName = this.config.require('appName');
        this.env = this.config.require('env');
        this.resourceGroupInstance = this.config.require('resourceGroupInstance');
        this.storageAccountInstance = this.config.require('storageAccountInstance');
        this.webAppInstance = this.config.require('webAppInstance');
        this.sqlSettings = this.config.require('sqlSettings');
        this.aspTier = this.config.require('aspTier');
        this.aspSize = this.config.require('aspSize');
        this.aspCapacity = this.config.requireNumber('aspCapacity');
        this.tags = {
            app: this.appName,
            env: this.env,
        }
    }
}