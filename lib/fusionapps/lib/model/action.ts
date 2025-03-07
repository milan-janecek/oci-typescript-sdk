/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Action details
 */
export interface Action {
  /**
   * Unique identifier of the object that represents the action
   */
  "referenceKey"?: string;
  /**
   * A string that describes whether the change is applied hot or cold
   */
  "state"?: Action.State;
  /**
   * A string that describes the details of the action. It does not have to be unique, and you can change it. Avoid entering confidential information.
   */
  "description": string;

  "actionType": string;
}

export namespace Action {
  export enum State {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Action): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "actionType" in obj && obj.actionType) {
      switch (obj.actionType) {
        case "PATCH":
          return model.PatchAction.getJsonObj(<model.PatchAction>(<object>jsonObj), true);
        case "QUARTERLY_UPGRADE":
          return model.UpgradeAction.getJsonObj(<model.UpgradeAction>(<object>jsonObj), true);
        case "VERTEX":
          return model.VertexAction.getJsonObj(<model.VertexAction>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.actionType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Action): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "actionType" in obj && obj.actionType) {
      switch (obj.actionType) {
        case "PATCH":
          return model.PatchAction.getDeserializedJsonObj(
            <model.PatchAction>(<object>jsonObj),
            true
          );
        case "QUARTERLY_UPGRADE":
          return model.UpgradeAction.getDeserializedJsonObj(
            <model.UpgradeAction>(<object>jsonObj),
            true
          );
        case "VERTEX":
          return model.VertexAction.getDeserializedJsonObj(
            <model.VertexAction>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.actionType);
      }
    }
    return jsonObj;
  }
}
