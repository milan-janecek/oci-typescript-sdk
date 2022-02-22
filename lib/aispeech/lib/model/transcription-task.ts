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
 * Description of Transcription Task.
 */
export interface TranscriptionTask {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Task name.
   */
  "displayName"?: string;
  /**
   * Task started time.
   */
  "timeStarted"?: Date;
  /**
   * Task finished time.
   */
  "timeFinished"?: Date;
  /**
   * How much progress the operation has made, vs the total amount of work that must be performed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * Time to live duration in days for tasks. Task will be available till max 90 days. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ttlInDays"?: number;
  "modelDetails"?: model.TranscriptionModelDetails;
  "audioFormatDetails"?: model.AudioFormatDetails;
  /**
   * Size of input file in Bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fileSizeInBytes"?: number;
  /**
   * Duration of input file in Seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fileDurationInSeconds"?: number;
  "inputLocation"?: model.ObjectLocation;
  "outputLocation"?: model.ObjectLocation;
  /**
   * The current state of the Task.
   */
  "lifecycleState"?: TranscriptionTask.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace TranscriptionTask {
  export enum LifecycleState {
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

  export function getJsonObj(obj: TranscriptionTask): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.TranscriptionModelDetails.getJsonObj(obj.modelDetails)
          : undefined,
        "audioFormatDetails": obj.audioFormatDetails
          ? model.AudioFormatDetails.getJsonObj(obj.audioFormatDetails)
          : undefined,

        "inputLocation": obj.inputLocation
          ? model.ObjectLocation.getJsonObj(obj.inputLocation)
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.ObjectLocation.getJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TranscriptionTask): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.TranscriptionModelDetails.getDeserializedJsonObj(obj.modelDetails)
          : undefined,
        "audioFormatDetails": obj.audioFormatDetails
          ? model.AudioFormatDetails.getDeserializedJsonObj(obj.audioFormatDetails)
          : undefined,

        "inputLocation": obj.inputLocation
          ? model.ObjectLocation.getDeserializedJsonObj(obj.inputLocation)
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.ObjectLocation.getDeserializedJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
