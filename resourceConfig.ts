import * as pulumi from "@pulumi/pulumi";


export class ResourceConfig {
    configs: {
        project: pulumi.Config,
    }
    appName: string;
    env: string;
    resourceGroupInstance: string;
    storageAccountInstance: string;
    webAppInstance: string;
    tags: {[key:string]: string}
    aspTier: string;
    aspSize: string;
    aspCapacity: number;

    constructor(project: pulumi.Config)
    {
    this.configs = {
        project: project,
    }
    this.appName = project.require('appName');
    this.env = project.require('env');
    this.resourceGroupInstance = project.require('resourceGroupInstance');
    this.storageAccountInstance = project.require('storageAccountInstance');
    this.webAppInstance = project.require('webAppInstance');
    this.tags = {
        app: this.appName,
        env: this.env,
    }
    this.aspTier = project.require('aspTier')
    this.aspSize = project.require('aspSize')
    this.aspCapacity = project.requireNumber('aspCapacity')
}
}


