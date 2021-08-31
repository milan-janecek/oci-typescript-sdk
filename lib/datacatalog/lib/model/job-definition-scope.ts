/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Defines the rules or criteria based on which the scope for job definition is circumscribed.
 */
export interface JobDefinitionScope {
  /**
   * Name of the folder or schema for this metadata harvest.
   */
  "folderName"?: string;
  /**
   * Name of the entity for this metadata harvest.
   */
  "entityName"?: string;
  /**
   * Filter rules with regular expression to specify folder names for this metadata harvest.
   */
  "folderNameFilter"?: string;
  /**
   * Filter rules with regular expression to specify entity names for this metadata harvest.
   */
  "entityNameFilter"?: string;
  /**
   * Specify if sample data to be extracted as part of this harvest.
   */
  "isSampleDataExtracted"?: boolean;
  /**
   * Specify the sample data size in MB, specified as number of rows, for this metadata harvest. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sampleDataSizeInMBs"?: number;
}

export namespace JobDefinitionScope {
  export function getJsonObj(obj: JobDefinitionScope): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobDefinitionScope): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
