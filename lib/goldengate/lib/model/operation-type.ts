/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Possible operation types.
 *
 **/
export enum OperationType {
  GoldengateDatabaseRegistrationCreate = "GOLDENGATE_DATABASE_REGISTRATION_CREATE",
  GoldengateDatabaseRegistrationUpdate = "GOLDENGATE_DATABASE_REGISTRATION_UPDATE",
  GoldengateDatabaseRegistrationDelete = "GOLDENGATE_DATABASE_REGISTRATION_DELETE",
  GoldengateDatabaseRegistrationMove = "GOLDENGATE_DATABASE_REGISTRATION_MOVE",
  GoldengateDeploymentCreate = "GOLDENGATE_DEPLOYMENT_CREATE",
  GoldengateDeploymentUpdate = "GOLDENGATE_DEPLOYMENT_UPDATE",
  GoldengateDeploymentDelete = "GOLDENGATE_DEPLOYMENT_DELETE",
  GoldengateDeploymentMove = "GOLDENGATE_DEPLOYMENT_MOVE",
  GoldengateDeploymentRestore = "GOLDENGATE_DEPLOYMENT_RESTORE",
  GoldengateDeploymentStart = "GOLDENGATE_DEPLOYMENT_START",
  GoldengateDeploymentStop = "GOLDENGATE_DEPLOYMENT_STOP",
  GoldengateDeploymentPatch = "GOLDENGATE_DEPLOYMENT_PATCH",
  GoldengateDeploymentBackupCreate = "GOLDENGATE_DEPLOYMENT_BACKUP_CREATE",
  GoldengateDeploymentBackupDelete = "GOLDENGATE_DEPLOYMENT_BACKUP_DELETE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): object {
    return { obj };
  }
}