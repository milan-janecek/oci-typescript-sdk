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
 * Properties to configure writing to HDFS.
 */
export interface HdfsWriteAttributes extends model.AbstractWriteAttribute {
  /**
   * Specifies whether to write output to single-file or not.
   */
  "writeToSingleFile"?: boolean;

  "modelType": string;
}

export namespace HdfsWriteAttributes {
  export function getJsonObj(obj: HdfsWriteAttributes, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractWriteAttribute.getJsonObj(obj) as HdfsWriteAttributes)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "HDFS_WRITE_ATTRIBUTE";
  export function getDeserializedJsonObj(
    obj: HdfsWriteAttributes,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractWriteAttribute.getDeserializedJsonObj(obj) as HdfsWriteAttributes)),
      ...{}
    };

    return jsonObj;
  }
}
