/**
 * Data Connectivity Management API
 * Use the DCMS APIs to perform Metadata/Data operations.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * A metadata details of a profiling entity result.
 */
export interface EntityProfileResult {
  /**
   * Number of columns in the DataFrame (arrow buffer) sent from Java layer. This value is not impacted by the List of attributes to profile as being passed via configuration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "attributeCount"?: number;
  /**
   * Number of rows were that were sampled Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sampledRowCount"?: number;
  /**
   * The estimated row count in the source. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedRowCount"?: number;
}

export namespace EntityProfileResult {
  export function getJsonObj(obj: EntityProfileResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityProfileResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
