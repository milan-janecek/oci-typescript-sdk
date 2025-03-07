/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The Summary of DiscoveryJob details.
 */
export interface DiscoveryJobSummary {
  /**
   * The OCID of Discovery job
   */
  "id": string;
  /**
   * Resource Type
   */
  "resourceType"?: DiscoveryJobSummary.ResourceType;
  /**
   * The name of resource type
   */
  "resourceName"?: string;
  /**
   * The OCID of the Compartment
   */
  "compartmentId"?: string;
  /**
   * Add option submits new discovery Job. Add with retry option to re-submit failed discovery job. Refresh option refreshes the existing discovered resources.
   *
   */
  "discoveryType"?: DiscoveryJobSummary.DiscoveryType;
  /**
   * Specifies the status of the discovery job
   */
  "status"?: DiscoveryJobSummary.Status;
  /**
   * The short summary of the status of the discovery job
   */
  "statusMessage"?: string;
  /**
   * The OCID of Tenant
   */
  "tenantId"?: string;
  /**
   * The OCID of user in which the job is submitted
   */
  "userId"?: string;
  /**
   * The time the discovery Job was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the DiscoveryJob Resource.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DiscoveryJobSummary {
  export enum ResourceType {
    WeblogicDomain = "WEBLOGIC_DOMAIN",
    EbsInstance = "EBS_INSTANCE",
    OracleDatabase = "ORACLE_DATABASE",
    OciOracleDb = "OCI_ORACLE_DB",
    OciOracleCdb = "OCI_ORACLE_CDB",
    OciOraclePdb = "OCI_ORACLE_PDB",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DiscoveryType {
    Add = "ADD",
    AddWithRetry = "ADD_WITH_RETRY",
    Refresh = "REFRESH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Inprogress = "INPROGRESS",
    Inactive = "INACTIVE",
    Created = "CREATED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DiscoveryJobSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveryJobSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
