/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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
 * Volume attachmentDetails. Please see {@link AttachVolumeDetails}
 *
 */
export interface InstanceConfigurationAttachVolumeDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Whether the attachment should be created in read-only mode.
   */
  "isReadOnly"?: boolean;
  /**
   * The device name.
   */
  "device"?: string;
  /**
   * Whether the attachment should be created in shareable mode. If an attachment
   * is created in shareable mode, then other instances can attach the same volume, provided
   * that they also create their attachments in shareable mode. Only certain volume types can
   * be attached in shareable mode. Defaults to false if not specified.
   *
   */
  "isShareable"?: boolean;

  "type": string;
}

export namespace InstanceConfigurationAttachVolumeDetails {
  export function getJsonObj(obj: InstanceConfigurationAttachVolumeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "iscsi":
          return model.InstanceConfigurationIscsiAttachVolumeDetails.getJsonObj(
            <model.InstanceConfigurationIscsiAttachVolumeDetails>(<object>jsonObj),
            true
          );
        case "paravirtualized":
          return model.InstanceConfigurationParavirtualizedAttachVolumeDetails.getJsonObj(
            <model.InstanceConfigurationParavirtualizedAttachVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceConfigurationAttachVolumeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "iscsi":
          return model.InstanceConfigurationIscsiAttachVolumeDetails.getDeserializedJsonObj(
            <model.InstanceConfigurationIscsiAttachVolumeDetails>(<object>jsonObj),
            true
          );
        case "paravirtualized":
          return model.InstanceConfigurationParavirtualizedAttachVolumeDetails.getDeserializedJsonObj(
            <model.InstanceConfigurationParavirtualizedAttachVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
