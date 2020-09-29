/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Label alias mapping view
 */
export interface LogAnalyticsLabelAlias {
  /**
   * alias
   */
  "alias"?: string;
  /**
   * alias display name
   */
  "aliasDisplayName"?: string;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * label display name
   */
  "displayName"?: string;
  /**
   * label name
   */
  "name"?: string;
  /**
   * priority
   */
  "priority"?: LogAnalyticsLabelAlias.Priority;
}

export namespace LogAnalyticsLabelAlias {
  export enum Priority {
    None = "NONE",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsLabelAlias): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}