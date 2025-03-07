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
 * Top level response object.
 *
 */
export interface SummarizeDatabaseInsightTablespaceUsageTrendAggregationCollection {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * Displays usage unit ( CORES, GB)
   *
   */
  "usageUnit": model.UsageUnit;
  /**
   * Time duration in milliseconds between data points (one hour or one day).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "itemDurationInMs": number;
  /**
   * Collection of Usage Data with time stamps for top five tablespace
   *
   */
  "items": Array<model.TablespaceUsageTrendAggregation>;
}

export namespace SummarizeDatabaseInsightTablespaceUsageTrendAggregationCollection {
  export function getJsonObj(
    obj: SummarizeDatabaseInsightTablespaceUsageTrendAggregationCollection
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.TablespaceUsageTrendAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeDatabaseInsightTablespaceUsageTrendAggregationCollection
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.TablespaceUsageTrendAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
