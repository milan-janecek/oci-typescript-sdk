/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * A log message from executing an operation that is tracked by a work request.
 */
export interface WorkRequestLogEntry {
  /**
   * A human-readable log message.
   */
  "message": string;
  /**
   * The date and time the log message was written, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timestamp": Date;
}

export namespace WorkRequestLogEntry {
  export function getJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}