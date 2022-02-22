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
 * Summary of a Endpoint.
 */
export interface EndpointSummary {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Registry description
   */
  "description"?: string;
  /**
   * Data Connectivity Management Endpoint display name, Endpoints can be renamed
   */
  "displayName": string;
  /**
   * Compartment Identifier
   */
  "compartmentId"?: string;
  /**
   * The time the Data Connectivity Management Registry was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the Data Connectivity Management Registry was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
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
   * The current state of the endpoint.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
}

export namespace EndpointSummary {
  export function getJsonObj(obj: EndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
