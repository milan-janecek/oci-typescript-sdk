/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The number of databases in the fleet, grouped by database type and sub type.
 */
export interface FleetStatusByCategory {
  /**
   * The type of Oracle Database installation.
   */
  "databaseType"?: model.DatabaseType;
  /**
   * The subtype of the Oracle Database. Indicates whether the database is a Container Database, Pluggable Database, or a Non-container Database.
   */
  "databaseSubType"?: model.DatabaseSubType;
  /**
   * The number of databases in the fleet. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inventoryCount"?: number;
}

export namespace FleetStatusByCategory {
  export function getJsonObj(obj: FleetStatusByCategory): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}