/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Properties to configure when writing to Oracle Autonomous Data Warehouse Cloud.
 */
export interface OracleAdwcWriteAttributes {
  /**
   * The bucket name for the attribute.
   */
  "bucketName"?: string;
  /**
   * The file name for the attribute.
   */
  "stagingFileName"?: string;
  "stagingDataAsset"?:
    | model.DataAssetFromJdbc
    | model.DataAssetFromOracleDetails
    | model.DataAssetFromAdwcDetails
    | model.DataAssetFromObjectStorageDetails
    | model.DataAssetFromAtpDetails
    | model.DataAssetFromMySQL;
  "stagingConnection"?:
    | model.ConnectionFromObjectStorage
    | model.ConnectionFromAdwc
    | model.ConnectionFromAtp
    | model.ConnectionFromOracle
    | model.ConnectionFromMySQL
    | model.ConnectionFromJdbc;
}

export namespace OracleAdwcWriteAttributes {
  export function getJsonObj(obj: OracleAdwcWriteAttributes): object {
    const jsonObj = {
      ...obj,
      ...{
        "stagingDataAsset": obj.stagingDataAsset
          ? model.DataAsset.getJsonObj(obj.stagingDataAsset)
          : undefined,
        "stagingConnection": obj.stagingConnection
          ? model.Connection.getJsonObj(obj.stagingConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}