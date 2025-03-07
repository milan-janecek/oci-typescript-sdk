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
 * Registry Attribute Object, to get connector details
 */
export interface Attribute {
  /**
   * The name of of the Attribute.
   */
  "name": string;
  /**
   * True if Attribute is sensitive.
   */
  "isSensitive"?: boolean;
  /**
   * True if Attribute is mandatory.
   */
  "isMandatory"?: boolean;
  /**
   * True if Attribute is generated.
   */
  "isGenerated"?: boolean;
  /**
   * True if Attribute is encoded.
   */
  "isBase64Encoded"?: boolean;
  /**
   * List of valid key list
   */
  "validKeyList"?: Array<string>;
  /**
   * Attribute type details
   */
  "attributeType"?: string;
}

export namespace Attribute {
  export function getJsonObj(obj: Attribute): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Attribute): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
