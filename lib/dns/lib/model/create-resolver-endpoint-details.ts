/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * The body for defining a new resolver endpoint.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateResolverEndpointDetails {
  /**
   * The name of the resolver endpoint. Must be unique, case-insensitive, within the resolver.
   *
   */
  "name": string;
  /**
   * An IP address from which forwarded queries may be sent. For VNIC endpoints, this IP address must be part
   * of the subnet and will be assigned by the system if unspecified when isForwarding is true.
   *
   */
  "forwardingAddress"?: string;
  /**
   * A Boolean flag indicating whether or not the resolver endpoint is for forwarding.
   *
   */
  "isForwarding": boolean;
  /**
   * A Boolean flag indicating whether or not the resolver endpoint is for listening.
   *
   */
  "isListening": boolean;
  /**
   * An IP address to listen to queries on. For VNIC endpoints this IP address must be part of the
   * subnet and will be assigned by the system if unspecified when isListening is true.
   *
   */
  "listeningAddress"?: string;

  "endpointType": string;
}

export namespace CreateResolverEndpointDetails {
  export function getJsonObj(obj: CreateResolverEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "endpointType" in obj && obj.endpointType) {
      switch (obj.endpointType) {
        case "VNIC":
          return model.CreateResolverVnicEndpointDetails.getJsonObj(
            <model.CreateResolverVnicEndpointDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.endpointType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateResolverEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "endpointType" in obj && obj.endpointType) {
      switch (obj.endpointType) {
        case "VNIC":
          return model.CreateResolverVnicEndpointDetails.getDeserializedJsonObj(
            <model.CreateResolverVnicEndpointDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.endpointType);
      }
    }
    return jsonObj;
  }
}
