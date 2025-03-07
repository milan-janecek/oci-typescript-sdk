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
 * The foreign key object.
 */
export interface ForeignKey extends model.Key {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * An array of attribute references.
   */
  "attributeRefs"?: Array<model.KeyAttribute>;
  /**
   * The update rule. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "updateRule"?: number;
  /**
   * The delete rule. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deleteRule"?: number;
  "referenceUniqueKey"?: model.PrimaryKey;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;

  "modelType": string;
}

export namespace ForeignKey {
  export function getJsonObj(obj: ForeignKey, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Key.getJsonObj(obj) as ForeignKey)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "attributeRefs": obj.attributeRefs
          ? obj.attributeRefs.map(item => {
              return model.KeyAttribute.getJsonObj(item);
            })
          : undefined,

        "referenceUniqueKey": obj.referenceUniqueKey
          ? model.UniqueKey.getJsonObj(obj.referenceUniqueKey)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "FOREIGN_KEY";
  export function getDeserializedJsonObj(obj: ForeignKey, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Key.getDeserializedJsonObj(obj) as ForeignKey)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "attributeRefs": obj.attributeRefs
          ? obj.attributeRefs.map(item => {
              return model.KeyAttribute.getDeserializedJsonObj(item);
            })
          : undefined,

        "referenceUniqueKey": obj.referenceUniqueKey
          ? model.UniqueKey.getDeserializedJsonObj(obj.referenceUniqueKey)
          : undefined
      }
    };

    return jsonObj;
  }
}
