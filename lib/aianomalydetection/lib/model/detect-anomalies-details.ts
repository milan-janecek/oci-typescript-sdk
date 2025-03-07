/**
 * Oracle Cloud AI Services API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * Base class for the DetectAnomalies call. It contains the identifier that will
 * be used for deciding what type of request this is.
 *
 */
export interface DetectAnomaliesDetails {
  /**
   * The OCID of the trained model\u3002
   */
  "modelId": string;

  "requestType": string;
}

export namespace DetectAnomaliesDetails {
  export function getJsonObj(obj: DetectAnomaliesDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "requestType" in obj && obj.requestType) {
      switch (obj.requestType) {
        case "INLINE":
          return model.InlineDetectAnomaliesRequest.getJsonObj(
            <model.InlineDetectAnomaliesRequest>(<object>jsonObj),
            true
          );
        case "BASE64_ENCODED":
          return model.EmbeddedDetectAnomaliesRequest.getJsonObj(
            <model.EmbeddedDetectAnomaliesRequest>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.requestType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DetectAnomaliesDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "requestType" in obj && obj.requestType) {
      switch (obj.requestType) {
        case "INLINE":
          return model.InlineDetectAnomaliesRequest.getDeserializedJsonObj(
            <model.InlineDetectAnomaliesRequest>(<object>jsonObj),
            true
          );
        case "BASE64_ENCODED":
          return model.EmbeddedDetectAnomaliesRequest.getDeserializedJsonObj(
            <model.EmbeddedDetectAnomaliesRequest>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.requestType);
      }
    }
    return jsonObj;
  }
}
