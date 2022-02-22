/**
 * Cloud Guard API
 * Use the Cloud Guard API to automate processes that you would otherwise perform through the Cloud Guard Console.

**Note:** You can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Detector Recipe Rule
 */
export interface TargetDetectorRecipeDetectorRule {
  /**
   * The unique identifier of the detector rule.
   */
  "detectorRuleId": string;
  /**
   * Display name for TargetDetectorRecipeDetectorRule. information.
   */
  "displayName"?: string;
  /**
   * Description for TargetDetectorRecipeDetectorRule. information.
   */
  "description"?: string;
  /**
   * Recommendation for TargetDetectorRecipeDetectorRule
   */
  "recommendation"?: string;
  /**
   * detector for the rule
   */
  "detector": model.DetectorEnum;
  /**
   * service type of the configuration to which the rule is applied
   */
  "serviceType": string;
  /**
   * resource type of the configuration to which the rule is applied
   */
  "resourceType": string;
  "details"?: model.TargetDetectorDetails;
  /**
   * List of cloudguard managed list types related to this rule
   */
  "managedListTypes"?: Array<TargetDetectorRecipeDetectorRule.ManagedListTypes>;
  /**
   * The date and time the target detector recipe rule was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the target detector recipe rule was updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the DetectorRule.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace TargetDetectorRecipeDetectorRule {
  export enum ManagedListTypes {
    CidrBlock = "CIDR_BLOCK",
    Users = "USERS",
    Groups = "GROUPS",
    Ipv4Address = "IPV4ADDRESS",
    Ipv6Address = "IPV6ADDRESS",
    ResourceOcid = "RESOURCE_OCID",
    Region = "REGION",
    Country = "COUNTRY",
    State = "STATE",
    City = "CITY",
    Tags = "TAGS",
    Generic = "GENERIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TargetDetectorRecipeDetectorRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details ? model.TargetDetectorDetails.getJsonObj(obj.details) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetDetectorRecipeDetectorRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? model.TargetDetectorDetails.getDeserializedJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
}
