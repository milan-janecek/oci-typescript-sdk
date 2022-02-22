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
 * A `ConfiguredType` represents a type that has built-in configuration to the type itself. An example is a `SSN` type whose basic type is `VARCHAR`, but the type itself also has a built-in configuration like length=10.
 */
export interface ConfiguredType extends model.BaseType {
  "wrappedType"?:
    | model.ConfiguredType
    | model.DerivedType
    | model.DataType
    | model.StructuredType
    | model.CompositeType;
  "configValues"?: model.ConfigValues;
  "configDefinition"?: model.ConfigDefinition;

  "modelType": string;
}

export namespace ConfiguredType {
  export function getJsonObj(obj: ConfiguredType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getJsonObj(obj) as ConfiguredType)),
      ...{
        "wrappedType": obj.wrappedType ? model.BaseType.getJsonObj(obj.wrappedType) : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined,
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "CONFIGURED_TYPE";
  export function getDeserializedJsonObj(obj: ConfiguredType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getDeserializedJsonObj(obj) as ConfiguredType)),
      ...{
        "wrappedType": obj.wrappedType
          ? model.BaseType.getDeserializedJsonObj(obj.wrappedType)
          : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined,
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getDeserializedJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
}
