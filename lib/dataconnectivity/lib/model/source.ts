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
 * The information about the source object.
 */
export interface Source extends model.CreateConnectivityValidationDetails {
  "entity":
    | model.DataEntityFromTable
    | model.DataEntityFromDataStore
    | model.DataEntityFromView
    | model.DataEntityFromSql
    | model.DataEntityFromFile;
  /**
   * Specifies the read access.
   */
  "isReadAccess"?: boolean;
  /**
   * Specifies the copy fields.
   */
  "isCopyFields"?: boolean;
  /**
   * Specifies if this uses a predefined shape.
   */
  "isPredefinedShape"?: boolean;
  "schemaDriftConfig"?: model.SchemaDriftConfig;
  "fixedDataShape"?: model.Shape;
  "readOperationConfig"?: model.ReadOperationConfig;

  "modelType": string;
}

export namespace Source {
  export function getJsonObj(obj: Source, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectivityValidationDetails.getJsonObj(obj) as Source)),
      ...{
        "entity": obj.entity ? model.DataEntity.getJsonObj(obj.entity) : undefined,

        "schemaDriftConfig": obj.schemaDriftConfig
          ? model.SchemaDriftConfig.getJsonObj(obj.schemaDriftConfig)
          : undefined,
        "fixedDataShape": obj.fixedDataShape
          ? model.Shape.getJsonObj(obj.fixedDataShape)
          : undefined,
        "readOperationConfig": obj.readOperationConfig
          ? model.ReadOperationConfig.getJsonObj(obj.readOperationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "SOURCE_OPERATOR";
  export function getDeserializedJsonObj(obj: Source, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectivityValidationDetails.getDeserializedJsonObj(obj) as Source)),
      ...{
        "entity": obj.entity ? model.DataEntity.getDeserializedJsonObj(obj.entity) : undefined,

        "schemaDriftConfig": obj.schemaDriftConfig
          ? model.SchemaDriftConfig.getDeserializedJsonObj(obj.schemaDriftConfig)
          : undefined,
        "fixedDataShape": obj.fixedDataShape
          ? model.Shape.getDeserializedJsonObj(obj.fixedDataShape)
          : undefined,
        "readOperationConfig": obj.readOperationConfig
          ? model.ReadOperationConfig.getDeserializedJsonObj(obj.readOperationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
