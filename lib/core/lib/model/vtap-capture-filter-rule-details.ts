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
 * This resource contains the rules governing what traffic a VTAP mirrors.
 *
 */
export interface VtapCaptureFilterRuleDetails {
  /**
   * The traffic direction the VTAP is configured to mirror.
   *
   */
  "trafficDirection": VtapCaptureFilterRuleDetails.TrafficDirection;
  /**
   * Include or exclude packets meeting this definition from mirrored traffic.
   *
   */
  "ruleAction"?: VtapCaptureFilterRuleDetails.RuleAction;
  /**
   * Traffic from this CIDR block to the VTAP source will be mirrored to the VTAP target.
   *
   */
  "sourceCidr"?: string;
  /**
   * Traffic sent to this CIDR block through the VTAP source will be mirrored to the VTAP target.
   *
   */
  "destinationCidr"?: string;
  /**
   * The transport protocol used in the filter. If do not choose a protocol, all protocols will be used in the filter.
   * Supported options are:
   *   * 1 = ICMP
   *   * 6 = TCP
   *   * 17 = UDP
   *
   */
  "protocol"?: string;
  "icmpOptions"?: model.IcmpOptions;
  "tcpOptions"?: model.TcpOptions;
  "udpOptions"?: model.UdpOptions;
}

export namespace VtapCaptureFilterRuleDetails {
  export enum TrafficDirection {
    Ingress = "INGRESS",
    Egress = "EGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RuleAction {
    Include = "INCLUDE",
    Exclude = "EXCLUDE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VtapCaptureFilterRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions ? model.IcmpOptions.getJsonObj(obj.icmpOptions) : undefined,
        "tcpOptions": obj.tcpOptions ? model.TcpOptions.getJsonObj(obj.tcpOptions) : undefined,
        "udpOptions": obj.udpOptions ? model.UdpOptions.getJsonObj(obj.udpOptions) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VtapCaptureFilterRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions
          ? model.IcmpOptions.getDeserializedJsonObj(obj.icmpOptions)
          : undefined,
        "tcpOptions": obj.tcpOptions
          ? model.TcpOptions.getDeserializedJsonObj(obj.tcpOptions)
          : undefined,
        "udpOptions": obj.udpOptions
          ? model.UdpOptions.getDeserializedJsonObj(obj.udpOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}