/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies trigger Deployment Pipleline stage which runs another pipeline of the application.
 */
export interface UpdateTriggerDeploymentStageDetails extends model.UpdateBuildPipelineStageDetails {
  /**
   * A target Pipeline ocid that will be run in this stage.
   */
  "deployPipelineId"?: string;
  /**
   * A boolean flag specifies whether the parameters should be passed during the deployment trigger.
   */
  "isPassAllParametersEnabled"?: boolean;

  "buildPipelineStageType": string;
}

export namespace UpdateTriggerDeploymentStageDetails {
  export function getJsonObj(
    obj: UpdateTriggerDeploymentStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateBuildPipelineStageDetails.getJsonObj(
            obj
          ) as UpdateTriggerDeploymentStageDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const buildPipelineStageType = "TRIGGER_DEPLOYMENT_PIPELINE";
  export function getDeserializedJsonObj(
    obj: UpdateTriggerDeploymentStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateBuildPipelineStageDetails.getDeserializedJsonObj(
            obj
          ) as UpdateTriggerDeploymentStageDetails)),
      ...{}
    };

    return jsonObj;
  }
}