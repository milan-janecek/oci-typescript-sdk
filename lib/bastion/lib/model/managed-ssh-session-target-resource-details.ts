/**
 * Bastion API
 * Use the Bastion API to provide restricted and time-limited access to target resources that don't have public endpoints. Bastions let authorized users connect from specific IP addresses to target resources using Secure Shell (SSH) sessions. For more information, see [the Bastion documentation](/iaas/Content/Bastion/home.htm).
 * OpenAPI spec version: 20210331
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
 * Details about a managed SSH session for a target resource.
 */
export interface ManagedSshSessionTargetResourceDetails extends model.TargetResourceDetails {
  /**
   * The name of the user on the target resource operating system that the session uses for the connection.
   */
  "targetResourceOperatingSystemUserName": string;
  /**
   * The unique identifier (OCID) of the target resource (a Compute instance, for example) that the session connects to.
   */
  "targetResourceId": string;
  /**
   * The private IP address of the target resource that the session connects to.
   */
  "targetResourcePrivateIpAddress"?: string;
  /**
   * The display name of the target Compute instance that the session connects to.
   */
  "targetResourceDisplayName": string;

  "sessionType": string;
}

export namespace ManagedSshSessionTargetResourceDetails {
  export function getJsonObj(
    obj: ManagedSshSessionTargetResourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetResourceDetails.getJsonObj(obj) as ManagedSshSessionTargetResourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sessionType = "MANAGED_SSH";
  export function getDeserializedJsonObj(
    obj: ManagedSshSessionTargetResourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetResourceDetails.getDeserializedJsonObj(
            obj
          ) as ManagedSshSessionTargetResourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
