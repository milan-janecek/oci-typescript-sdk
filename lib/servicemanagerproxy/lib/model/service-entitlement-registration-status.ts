/**
 * Service Manager Proxy API
 * Use the Service Manager Proxy API to obtain information about SaaS environments provisioned by Service Manager. 
You can get information such as service types and service environment URLs.

 * OpenAPI spec version: 20210914
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
 * Service Entitlement registration status
 **/
export enum ServiceEntitlementRegistrationStatus {
  Initialized = "INITIALIZED",
  BeginActivation = "BEGIN_ACTIVATION",
  Active = "ACTIVE",
  BeginSoftTermination = "BEGIN_SOFT_TERMINATION",
  SoftTerminated = "SOFT_TERMINATED",
  BeginTermination = "BEGIN_TERMINATION",
  Canceled = "CANCELED",
  Terminated = "TERMINATED",
  BeginDisabling = "BEGIN_DISABLING",
  BeginEnabling = "BEGIN_ENABLING",
  BeginMigration = "BEGIN_MIGRATION",
  Disabled = "DISABLED",
  BeginSuspension = "BEGIN_SUSPENSION",
  BeginResumption = "BEGIN_RESUMPTION",
  Suspended = "SUSPENDED",
  BeginLockRelocation = "BEGIN_LOCK_RELOCATION",
  LockedRelocation = "LOCKED_RELOCATION",
  BeginRelocation = "BEGIN_RELOCATION",
  Relocated = "RELOCATED",
  BeginUnlockRelocation = "BEGIN_UNLOCK_RELOCATION",
  UnlockedRelocation = "UNLOCKED_RELOCATION",
  FailedLockRelocation = "FAILED_LOCK_RELOCATION",
  FailedActivation = "FAILED_ACTIVATION",
  FailedMigration = "FAILED_MIGRATION",
  AccessDisabled = "ACCESS_DISABLED",
  BeginDisablingAccess = "BEGIN_DISABLING_ACCESS",
  BeginEnablingAccess = "BEGIN_ENABLING_ACCESS",
  TraUnknown = "TRA_UNKNOWN",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ServiceEntitlementRegistrationStatus {
  export function getJsonObj(
    obj: ServiceEntitlementRegistrationStatus
  ): ServiceEntitlementRegistrationStatus {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: ServiceEntitlementRegistrationStatus
  ): ServiceEntitlementRegistrationStatus {
    return obj;
  }
}