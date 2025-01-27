// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * A test invoke that echoes its input, using multiple inputs.
 */
export function doMultiEcho(echoA?: string, echoB?: string, opts?: pulumi.InvokeOptions): Promise<DoMultiEchoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pkg:index:doMultiEcho", {
        "echoA": echoA,
        "echoB": echoB,
    }, opts, utilities.getPackage());
}

export interface DoMultiEchoResult {
    readonly echoA?: string;
    readonly echoB?: string;
}
/**
 * A test invoke that echoes its input, using multiple inputs.
 */
export function doMultiEchoOutput(echoA?: pulumi.Input<string | undefined>, echoB?: pulumi.Input<string | undefined>, opts?: pulumi.InvokeOptions): pulumi.Output<DoMultiEchoResult> {
    var args = {
        "echoA": echoA,
        "echoB": echoB,
    };
    return pulumi.output(args).apply((resolvedArgs: any) => doMultiEcho(resolvedArgs.echoA, resolvedArgs.echoB, opts));
}
