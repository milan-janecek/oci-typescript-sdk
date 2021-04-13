/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors.
 * OpenAPI spec version: 20200630
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
 * Information about request query parameters.
 *
 */
export interface RequestQueryParam {
  /**
   * Name of request query parameter.
   */
  "paramName": string;
  /**
   * Value of request query parameter.
   */
  "paramValue"?: string;
}

export namespace RequestQueryParam {
  export function getJsonObj(obj: RequestQueryParam): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}