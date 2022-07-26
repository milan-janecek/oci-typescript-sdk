/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * A summary of the AWR top wait event data for one event.
 */
export interface AwrDatabaseTopWaitEventSummary {
  /**
   * The name of the event.
   */
  "name": string;
  /**
   * The wait count per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "waitsPerSec"?: number;
  /**
   * The average wait time per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgWaitTimePerSec"?: number;
}

export namespace AwrDatabaseTopWaitEventSummary {
  export function getJsonObj(obj: AwrDatabaseTopWaitEventSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDatabaseTopWaitEventSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}