/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies the OKE cluster deployment stage using Helm charts.
 */
export interface OkeHelmChartDeployStageSummary extends model.DeployStageSummary {
  /**
   * Kubernetes cluster environment OCID for deployment.
   */
  "okeClusterDeployEnvironmentId": string;
  /**
   * Helm chart artifact OCID.
   */
  "helmChartDeployArtifactId": string;
  /**
   * List of values.yaml file artifact OCIDs.
   */
  "valuesArtifactIds"?: Array<string>;
  /**
   * Release name of the Helm chart.
   */
  "releaseName": string;
  /**
   * Default namespace to be used for Kubernetes deployment when not specified in the manifest.
   */
  "namespace"?: string;
  /**
   * Time to wait for execution of a helm stage. Defaults to 300 seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds"?: number;
  "rollbackPolicy"?: model.NoDeployStageRollbackPolicy | model.AutomatedDeployStageRollbackPolicy;

  "deployStageType": string;
}

export namespace OkeHelmChartDeployStageSummary {
  export function getJsonObj(
    obj: OkeHelmChartDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getJsonObj(obj) as OkeHelmChartDeployStageSummary)),
      ...{
        "rollbackPolicy": obj.rollbackPolicy
          ? model.DeployStageRollbackPolicy.getJsonObj(obj.rollbackPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "OKE_HELM_CHART_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: OkeHelmChartDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getDeserializedJsonObj(obj) as OkeHelmChartDeployStageSummary)),
      ...{
        "rollbackPolicy": obj.rollbackPolicy
          ? model.DeployStageRollbackPolicy.getDeserializedJsonObj(obj.rollbackPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
