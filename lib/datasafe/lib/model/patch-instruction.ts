/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A single instruction to be included as part of Patch request content.
 */
export interface PatchInstruction {
  /**
   * The set of values to which the operation applies as a [JMESPath expression](https://jmespath.org/specification.html) for evaluation against the context resource. An operation fails if the selection yields an exception, except as otherwise specified. Note that comparisons involving non-primitive values (objects or arrays) are not supported and will always evaluate to false.
   */
  "selection": string;

  "operation": string;
}

export namespace PatchInstruction {
  export function getJsonObj(obj: PatchInstruction): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "operation" in obj && obj.operation) {
      switch (obj.operation) {
        case "REMOVE":
          return model.PatchRemoveInstruction.getJsonObj(
            <model.PatchRemoveInstruction>(<object>jsonObj),
            true
          );
        case "INSERT":
          return model.PatchInsertInstruction.getJsonObj(
            <model.PatchInsertInstruction>(<object>jsonObj),
            true
          );
        case "MERGE":
          return model.PatchMergeInstruction.getJsonObj(
            <model.PatchMergeInstruction>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.operation);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatchInstruction): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "operation" in obj && obj.operation) {
      switch (obj.operation) {
        case "REMOVE":
          return model.PatchRemoveInstruction.getDeserializedJsonObj(
            <model.PatchRemoveInstruction>(<object>jsonObj),
            true
          );
        case "INSERT":
          return model.PatchInsertInstruction.getDeserializedJsonObj(
            <model.PatchInsertInstruction>(<object>jsonObj),
            true
          );
        case "MERGE":
          return model.PatchMergeInstruction.getDeserializedJsonObj(
            <model.PatchMergeInstruction>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.operation);
      }
    }
    return jsonObj;
  }
}
