/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Migration tablespace settings.
 *
 */
export interface UpdateTargetTypeTablespaceDetails {
  "targetType": string;
}

export namespace UpdateTargetTypeTablespaceDetails {
  export function getJsonObj(obj: UpdateTargetTypeTablespaceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "targetType" in obj && obj.targetType) {
      switch (obj.targetType) {
        case "TARGET_DEFAULTS_REMAP":
          return model.UpdateTargetDefaultsRemapTablespaceDetails.getJsonObj(
            <model.UpdateTargetDefaultsRemapTablespaceDetails>(<object>jsonObj),
            true
          );
        case "ADB_D_REMAP":
          return model.UpdateADBDedicatedRemapTargetTablespaceDetails.getJsonObj(
            <model.UpdateADBDedicatedRemapTargetTablespaceDetails>(<object>jsonObj),
            true
          );
        case "NON_ADB_REMAP":
          return model.UpdateNonADBRemapTablespaceDetails.getJsonObj(
            <model.UpdateNonADBRemapTablespaceDetails>(<object>jsonObj),
            true
          );
        case "NON_ADB_AUTOCREATE":
          return model.UpdateNonADBAutoCreateTablespaceDetails.getJsonObj(
            <model.UpdateNonADBAutoCreateTablespaceDetails>(<object>jsonObj),
            true
          );
        case "ADB_D_AUTOCREATE":
          return model.UpdateADBDedicatedAutoCreateTablespaceDetails.getJsonObj(
            <model.UpdateADBDedicatedAutoCreateTablespaceDetails>(<object>jsonObj),
            true
          );
        case "ADB_S_REMAP":
          return model.UpdateADBServerlesTablespaceDetails.getJsonObj(
            <model.UpdateADBServerlesTablespaceDetails>(<object>jsonObj),
            true
          );
        case "TARGET_DEFAULTS_AUTOCREATE":
          return model.UpdateTargetDefaultsAutoCreateTablespaceDetails.getJsonObj(
            <model.UpdateTargetDefaultsAutoCreateTablespaceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.targetType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateTargetTypeTablespaceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "targetType" in obj && obj.targetType) {
      switch (obj.targetType) {
        case "TARGET_DEFAULTS_REMAP":
          return model.UpdateTargetDefaultsRemapTablespaceDetails.getDeserializedJsonObj(
            <model.UpdateTargetDefaultsRemapTablespaceDetails>(<object>jsonObj),
            true
          );
        case "ADB_D_REMAP":
          return model.UpdateADBDedicatedRemapTargetTablespaceDetails.getDeserializedJsonObj(
            <model.UpdateADBDedicatedRemapTargetTablespaceDetails>(<object>jsonObj),
            true
          );
        case "NON_ADB_REMAP":
          return model.UpdateNonADBRemapTablespaceDetails.getDeserializedJsonObj(
            <model.UpdateNonADBRemapTablespaceDetails>(<object>jsonObj),
            true
          );
        case "NON_ADB_AUTOCREATE":
          return model.UpdateNonADBAutoCreateTablespaceDetails.getDeserializedJsonObj(
            <model.UpdateNonADBAutoCreateTablespaceDetails>(<object>jsonObj),
            true
          );
        case "ADB_D_AUTOCREATE":
          return model.UpdateADBDedicatedAutoCreateTablespaceDetails.getDeserializedJsonObj(
            <model.UpdateADBDedicatedAutoCreateTablespaceDetails>(<object>jsonObj),
            true
          );
        case "ADB_S_REMAP":
          return model.UpdateADBServerlesTablespaceDetails.getDeserializedJsonObj(
            <model.UpdateADBServerlesTablespaceDetails>(<object>jsonObj),
            true
          );
        case "TARGET_DEFAULTS_AUTOCREATE":
          return model.UpdateTargetDefaultsAutoCreateTablespaceDetails.getDeserializedJsonObj(
            <model.UpdateTargetDefaultsAutoCreateTablespaceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.targetType);
      }
    }
    return jsonObj;
  }
}
