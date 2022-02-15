/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

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
 * A branching tree with aggregated stack trace.
 *
 */
export interface AggregatedStackTrace {
  "stackTraceElement"?: model.StackTraceElement;
  /**
   * List of child aggregated stack trace to represent branches.
   *
   */
  "children"?: Array<model.AggregatedStackTrace>;
}

export namespace AggregatedStackTrace {
  export function getJsonObj(obj: AggregatedStackTrace): object {
    const jsonObj = {
      ...obj,
      ...{
        "stackTraceElement": obj.stackTraceElement
          ? model.StackTraceElement.getJsonObj(obj.stackTraceElement)
          : undefined,
        "children": obj.children
          ? obj.children.map(item => {
              return model.AggregatedStackTrace.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AggregatedStackTrace): object {
    const jsonObj = {
      ...obj,
      ...{
        "stackTraceElement": obj.stackTraceElement
          ? model.StackTraceElement.getDeserializedJsonObj(obj.stackTraceElement)
          : undefined,
        "children": obj.children
          ? obj.children.map(item => {
              return model.AggregatedStackTrace.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}