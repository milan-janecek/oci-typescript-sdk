/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
 * 
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
 * The body for either defining a new zone or migrating a zone from migrationSource. This is determined by the migrationSource discriminator.
 * NONE indicates creation of a new zone (default). DYNECT indicates migration from a DynECT zone.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateZoneBaseDetails {
  /**
   * The name of the zone.
   */
  "name": string;
  /**
   * The OCID of the compartment containing the zone.
   */
  "compartmentId": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "migrationSource": string;
}

export namespace CreateZoneBaseDetails {
  export function getJsonObj(obj: CreateZoneBaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "migrationSource" in obj && obj.migrationSource) {
      switch (obj.migrationSource) {
        case "NONE":
          return model.CreateZoneDetails.getJsonObj(
            <model.CreateZoneDetails>(<object>jsonObj),
            true
          );
        case "DYNECT":
          return model.CreateMigratedDynectZoneDetails.getJsonObj(
            <model.CreateMigratedDynectZoneDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.migrationSource);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateZoneBaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "migrationSource" in obj && obj.migrationSource) {
      switch (obj.migrationSource) {
        case "NONE":
          return model.CreateZoneDetails.getDeserializedJsonObj(
            <model.CreateZoneDetails>(<object>jsonObj),
            true
          );
        case "DYNECT":
          return model.CreateMigratedDynectZoneDetails.getDeserializedJsonObj(
            <model.CreateMigratedDynectZoneDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.migrationSource);
      }
    }
    return jsonObj;
  }
}
