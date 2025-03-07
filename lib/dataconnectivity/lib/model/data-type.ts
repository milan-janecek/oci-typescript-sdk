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
 * A `DataType` object is a simple primitive type that describes the type of a single atomic unit of data.  For example, `INT`, `VARCHAR`, `NUMBER`, and so on.
 */
export interface DataType extends model.BaseType {
  /**
   * The data type.
   */
  "dtType"?: DataType.DtType;
  /**
   * The data type system name.
   */
  "typeSystemName"?: string;
  "configDefinition"?: model.ConfigDefinition;

  "modelType": string;
}

export namespace DataType {
  export enum DtType {
    Primitive = "PRIMITIVE",
    Structured = "STRUCTURED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getJsonObj(obj) as DataType)),
      ...{
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "DATA_TYPE";
  export function getDeserializedJsonObj(obj: DataType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getDeserializedJsonObj(obj) as DataType)),
      ...{
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getDeserializedJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
}
