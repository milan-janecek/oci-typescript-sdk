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
 * A data catalog enables you to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 */
export interface Catalog {
  /**
   * OCID of the data catalog instance.
   */
  "id": string;
  /**
   * Data catalog identifier, which can be renamed.
   */
  "displayName"?: string;
  /**
   * Compartment identifier.
   */
  "compartmentId": string;
  /**
   * The time the data catalog was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the data catalog was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The REST front endpoint URL to the data catalog instance.
   */
  "serviceApiUrl"?: string;
  /**
   * The console front endpoint URL to the data catalog instance.
   */
  "serviceConsoleUrl"?: string;
  /**
   * The number of data objects added to the data catalog.
   * Please see the data catalog documentation for further information on how this is calculated.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfObjects"?: number;
  /**
   * The current state of the data catalog resource.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * An message describing the current state in more detail.
   * For example, it can be used to provide actionable information for a resource in 'Failed' state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The list of private reverse connection endpoints attached to the catalog
   */
  "attachedCatalogPrivateEndpoints"?: Array<string>;
}

export namespace Catalog {
  export function getJsonObj(obj: Catalog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Catalog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
