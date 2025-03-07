/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * The details for creating a new announcement subscription.
 */
export interface CreateAnnouncementSubscriptionDetails {
  /**
   * A user-friendly name for the announcement subscription. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A description of the announcement subscription. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the announcement subscription.
   *
   */
  "compartmentId": string;
  /**
   * The OCID of the Notifications service topic that is the target for publishing announcements that match the configured announcement subscription. The caller of the operation needs the ONS_TOPIC_PUBLISH permission for the targeted Notifications service topic. For more information about Notifications permissions, see [Details for Notifications](https://docs.cloud.oracle.com/Content/Identity/policyreference/notificationpolicyreference.htm).
   *
   */
  "onsTopicId": string;
  /**
   * A list of filter groups for the announcement subscription. A filter group combines one or more filters that the Announcements service applies to announcements for matching purposes.
   *
   */
  "filterGroups"?: { [key: string]: model.FilterGroupDetails };
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
}

export namespace CreateAnnouncementSubscriptionDetails {
  export function getJsonObj(obj: CreateAnnouncementSubscriptionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "filterGroups": obj.filterGroups
          ? common.mapContainer(obj.filterGroups, model.FilterGroupDetails.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAnnouncementSubscriptionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "filterGroups": obj.filterGroups
          ? common.mapContainer(obj.filterGroups, model.FilterGroupDetails.getDeserializedJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}
