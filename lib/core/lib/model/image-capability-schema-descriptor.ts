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
 * Image Capability Schema Descriptor is a type of capability for an image.
 *
 */
export interface ImageCapabilitySchemaDescriptor {
  "source": ImageCapabilitySchemaDescriptor.Source;

  "descriptorType": string;
}

export namespace ImageCapabilitySchemaDescriptor {
  export enum Source {
    Global = "GLOBAL",
    Image = "IMAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ImageCapabilitySchemaDescriptor): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "descriptorType" in obj && obj.descriptorType) {
      switch (obj.descriptorType) {
        case "enumstring":
          return model.EnumStringImageCapabilitySchemaDescriptor.getJsonObj(
            <model.EnumStringImageCapabilitySchemaDescriptor>(<object>jsonObj),
            true
          );
        case "enuminteger":
          return model.EnumIntegerImageCapabilityDescriptor.getJsonObj(
            <model.EnumIntegerImageCapabilityDescriptor>(<object>jsonObj),
            true
          );
        case "boolean":
          return model.BooleanImageCapabilitySchemaDescriptor.getJsonObj(
            <model.BooleanImageCapabilitySchemaDescriptor>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.descriptorType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImageCapabilitySchemaDescriptor): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "descriptorType" in obj && obj.descriptorType) {
      switch (obj.descriptorType) {
        case "enumstring":
          return model.EnumStringImageCapabilitySchemaDescriptor.getDeserializedJsonObj(
            <model.EnumStringImageCapabilitySchemaDescriptor>(<object>jsonObj),
            true
          );
        case "enuminteger":
          return model.EnumIntegerImageCapabilityDescriptor.getDeserializedJsonObj(
            <model.EnumIntegerImageCapabilityDescriptor>(<object>jsonObj),
            true
          );
        case "boolean":
          return model.BooleanImageCapabilitySchemaDescriptor.getDeserializedJsonObj(
            <model.BooleanImageCapabilitySchemaDescriptor>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.descriptorType);
      }
    }
    return jsonObj;
  }
}
