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

export interface BootVolumeSourceDetails {
  "type": string;
}

export namespace BootVolumeSourceDetails {
  export function getJsonObj(obj: BootVolumeSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "bootVolumeBackup":
          return model.BootVolumeSourceFromBootVolumeBackupDetails.getJsonObj(
            <model.BootVolumeSourceFromBootVolumeBackupDetails>(<object>jsonObj),
            true
          );
        case "bootVolume":
          return model.BootVolumeSourceFromBootVolumeDetails.getJsonObj(
            <model.BootVolumeSourceFromBootVolumeDetails>(<object>jsonObj),
            true
          );
        case "bootVolumeReplica":
          return model.BootVolumeSourceFromBootVolumeReplicaDetails.getJsonObj(
            <model.BootVolumeSourceFromBootVolumeReplicaDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BootVolumeSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "bootVolumeBackup":
          return model.BootVolumeSourceFromBootVolumeBackupDetails.getDeserializedJsonObj(
            <model.BootVolumeSourceFromBootVolumeBackupDetails>(<object>jsonObj),
            true
          );
        case "bootVolume":
          return model.BootVolumeSourceFromBootVolumeDetails.getDeserializedJsonObj(
            <model.BootVolumeSourceFromBootVolumeDetails>(<object>jsonObj),
            true
          );
        case "bootVolumeReplica":
          return model.BootVolumeSourceFromBootVolumeReplicaDetails.getDeserializedJsonObj(
            <model.BootVolumeSourceFromBootVolumeReplicaDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
