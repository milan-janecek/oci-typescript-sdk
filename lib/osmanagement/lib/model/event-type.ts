/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Event type:
 *   * `KERNEL_OOPS` - Used to identify a kernel panic condition event
 *   * `KERNEL_CRASH` - Used to identify an internal fatal kernel error that cannot be safely recovered from
 *   * `CRASH` - Used to identify when an application stopped functioning properly and exited
 *   * `EXPLOIT_ATTEMPT` - Used to identify a known exploit detection as identified by Ksplice
 *   * `COMPLIANCE` - Used to identify a compliance related events
 *   * `TUNING_SUGGESTION` - Used to identify autonomous tuning suggestion events
 *   * `TUNING_APPLIED` - Used to identify when a tuning suggestion has been applied
 *   * `SECURITY` - Used to identify security related events
 *   * `ERROR` - Used to identify error related events
 *   * `WARNING` - Used to identify warning related events
 *
 **/
export enum EventType {
  KernelOops = "KERNEL_OOPS",
  KernelCrash = "KERNEL_CRASH",
  Crash = "CRASH",
  ExploitAttempt = "EXPLOIT_ATTEMPT",
  Compliance = "COMPLIANCE",
  TuningSuggestion = "TUNING_SUGGESTION",
  TuningApplied = "TUNING_APPLIED",
  Security = "SECURITY",
  Error = "ERROR",
  Warning = "WARNING",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace EventType {
  export function getJsonObj(obj: EventType): EventType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: EventType): EventType {
    return obj;
  }
}
