import {ResourceConfig} from "../ResourceConfig";
import * as pulumi from "@pulumi/pulumi";

const CONFIG = new pulumi.Config('BuchheitHistory');
const AZ_CONFIG = new pulumi.Config('azure-native')

export const RESOURCE_CONFIG = new ResourceConfig(CONFIG, AZ_CONFIG);