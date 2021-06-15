import {ResourceConfig} from "../ResourceConfig";
import * as pulumi from "@pulumi/pulumi";

const CONFIG = new pulumi.Config('BuchheitHistory');

export const RESOURCE_CONFIG = new ResourceConfig(CONFIG);