/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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

export interface UpdateAutoScalingPolicyDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The capacity requirements of the autoscaling policy.
   */
  "capacity"?: model.Capacity;
  /**
   * Whether the autoscaling policy is enabled.
   */
  "isEnabled"?: boolean;

  "policyType": string;
}

export namespace UpdateAutoScalingPolicyDetails {
  export function getJsonObj(obj: UpdateAutoScalingPolicyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getJsonObj(obj.capacity) : undefined
      }
    };

    if (obj && "policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "threshold":
          return model.UpdateThresholdPolicyDetails.getJsonObj(
            <model.UpdateThresholdPolicyDetails>(<object>jsonObj),
            true
          );
        case "scheduled":
          return model.UpdateScheduledPolicyDetails.getJsonObj(
            <model.UpdateScheduledPolicyDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAutoScalingPolicyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getDeserializedJsonObj(obj.capacity) : undefined
      }
    };

    if (obj && "policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "threshold":
          return model.UpdateThresholdPolicyDetails.getDeserializedJsonObj(
            <model.UpdateThresholdPolicyDetails>(<object>jsonObj),
            true
          );
        case "scheduled":
          return model.UpdateScheduledPolicyDetails.getDeserializedJsonObj(
            <model.UpdateScheduledPolicyDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
}
