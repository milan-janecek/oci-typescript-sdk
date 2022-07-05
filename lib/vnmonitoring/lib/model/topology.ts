/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
 * Defines the representation of a virtual network topology.
 */
export interface Topology {
  /**
   * Lists entities comprising the virtual network topology.
   */
  "entities": Array<any>;
  /**
   * Lists relationships between entities in the virtual network topology.
   */
  "relationships": Array<model.TopologyEntityRelationship>;
  /**
   * Records when the virtual network topology was created, in [RFC3339](https://tools.ietf.org/html/rfc3339) format for date and time.
   */
  "timeCreated": Date;

  "type": string;
}

export namespace Topology {
  export function getJsonObj(obj: Topology): object {
    const jsonObj = {
      ...obj,
      ...{
        "relationships": obj.relationships
          ? obj.relationships.map(item => {
              return model.TopologyEntityRelationship.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VCN":
          return model.VcnTopology.getJsonObj(<model.VcnTopology>(<object>jsonObj), true);
        case "PATH":
          return model.PathTopology.getJsonObj(<model.PathTopology>(<object>jsonObj), true);
        case "NETWORKING":
          return model.NetworkingTopology.getJsonObj(
            <model.NetworkingTopology>(<object>jsonObj),
            true
          );
        case "SUBNET":
          return model.SubnetTopology.getJsonObj(<model.SubnetTopology>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Topology): object {
    const jsonObj = {
      ...obj,
      ...{
        "relationships": obj.relationships
          ? obj.relationships.map(item => {
              return model.TopologyEntityRelationship.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VCN":
          return model.VcnTopology.getDeserializedJsonObj(
            <model.VcnTopology>(<object>jsonObj),
            true
          );
        case "PATH":
          return model.PathTopology.getDeserializedJsonObj(
            <model.PathTopology>(<object>jsonObj),
            true
          );
        case "NETWORKING":
          return model.NetworkingTopology.getDeserializedJsonObj(
            <model.NetworkingTopology>(<object>jsonObj),
            true
          );
        case "SUBNET":
          return model.SubnetTopology.getDeserializedJsonObj(
            <model.SubnetTopology>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}