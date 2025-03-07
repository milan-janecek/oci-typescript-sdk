/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Transcription Filter.
 */
export interface TranscriptionFilter {
  "type": string;
}

export namespace TranscriptionFilter {
  export function getJsonObj(obj: TranscriptionFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PROFANITY":
          return model.ProfanityTranscriptionFilter.getJsonObj(
            <model.ProfanityTranscriptionFilter>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TranscriptionFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PROFANITY":
          return model.ProfanityTranscriptionFilter.getDeserializedJsonObj(
            <model.ProfanityTranscriptionFilter>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
