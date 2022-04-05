/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
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
 * Summary information for the specified tag default.
 *
 */
export interface TagDefaultSummary {
  /**
   * The OCID of the tag default.
   */
  "id": string;
  /**
   * The OCID of the compartment. The tag default will apply to all new resources that are created in the compartment.
   *
   */
  "compartmentId": string;
  /**
   * The OCID of the tag namespace that contains the tag definition.
   *
   */
  "tagNamespaceId": string;
  /**
   * The OCID of the tag definition. The tag default will always assign a default value for this tag definition.
   *
   */
  "tagDefinitionId": string;
  /**
   * The name used in the tag definition. This field is informational in the context of the tag default.
   *
   */
  "tagDefinitionName": string;
  /**
   * The default value for the tag definition. This will be applied to all new resources created in the compartment.
   *
   */
  "value": string;
  /**
    * Date and time the `TagDefault` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The tag default's current state. After creating a `TagDefault`, make sure its `lifecycleState` is ACTIVE before using it.
   *
   */
  "lifecycleState"?: TagDefaultSummary.LifecycleState;
  /**
    * If you specify that a value is required, a value is set during resource creation (either by
* the user creating the resource or another tag defualt). If no value is set, resource
* creation is blocked.
* <p>
* If the `isRequired` flag is set to \"true\", the value is set during resource creation.
* * If the `isRequired` flag is set to \"false\", the value you enter is set during resource creation.
* <p>
Example: `false`
* 
    */
  "isRequired": boolean;
}

export namespace TagDefaultSummary {
  export enum LifecycleState {
    Active = "ACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TagDefaultSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TagDefaultSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
