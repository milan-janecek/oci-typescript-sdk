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
 * A location in Object Storage that is uniquely identified by namespace name, bucket name and object name.
 */
export interface ObjectLocation {
  /**
   * Object Storage namespace name.
   */
  "namespaceName": string;
  /**
   * Object Storage bucket name.
   */
  "bucketName": string;
  /**
   * Object Storage object names.
   */
  "objectNames": Array<string>;
}

export namespace ObjectLocation {
  export function getJsonObj(obj: ObjectLocation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectLocation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
