/**
 * Dashboards API
 * Use the Oracle Cloud Infrastructure Dashboards service API to manage dashboards in the Console. 
Dashboards provide an organized and customizable view of resources and their metrics in the Console.
For more information, see [Dashboards](/Content/Dashboards/home.htm).

**Important:** Resources for the Dashboards service are created in the tenacy's home region.
Although it is possible to create dashboard and dashboard group resources in regions other than the home region,
you won't be able to view those resources in the Console.
Therefore, creating resources outside of the home region is not recommended.

 * OpenAPI spec version: 20210731
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
 * The base schema for updating a dashboard.
 * Derived schemas have configurations and widgets specific to the  `schemaVersion`.
 *
 */
export interface UpdateDashboardDetails {
  /**
   * A user-friendly name for the dashboard. Does not have to be unique, and it can be changed. Avoid entering confidential information.
   * Leading and trailing spaces and the following special characters are not allowed: <>()=/'\"&\\
   *
   */
  "displayName"?: string;
  /**
   * A short description of the dashboard. It can be changed. Avoid entering confidential information.
   * The following special characters are not allowed: <>()=/'\"&\\
   *
   */
  "description"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "schemaVersion": string;
}

export namespace UpdateDashboardDetails {
  export function getJsonObj(obj: UpdateDashboardDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "schemaVersion" in obj && obj.schemaVersion) {
      switch (obj.schemaVersion) {
        case "V1":
          return model.UpdateV1DashboardDetails.getJsonObj(
            <model.UpdateV1DashboardDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.schemaVersion);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDashboardDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "schemaVersion" in obj && obj.schemaVersion) {
      switch (obj.schemaVersion) {
        case "V1":
          return model.UpdateV1DashboardDetails.getDeserializedJsonObj(
            <model.UpdateV1DashboardDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.schemaVersion);
      }
    }
    return jsonObj;
  }
}
