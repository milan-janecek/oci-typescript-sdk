/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * A condition to apply to an access control rule.
 */
export interface RuleCondition {
  "attributeName": string;
}

export namespace RuleCondition {
  export function getJsonObj(obj: RuleCondition): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "attributeName" in obj && obj.attributeName) {
      switch (obj.attributeName) {
        case "SOURCE_VCN_ID":
          return model.SourceVcnIdCondition.getJsonObj(
            <model.SourceVcnIdCondition>(<object>jsonObj),
            true
          );
        case "SOURCE_IP_ADDRESS":
          return model.SourceIpAddressCondition.getJsonObj(
            <model.SourceIpAddressCondition>(<object>jsonObj),
            true
          );
        case "PATH":
          return model.PathMatchCondition.getJsonObj(
            <model.PathMatchCondition>(<object>jsonObj),
            true
          );
        case "SOURCE_VCN_IP_ADDRESS":
          return model.SourceVcnIpAddressCondition.getJsonObj(
            <model.SourceVcnIpAddressCondition>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.attributeName);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RuleCondition): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "attributeName" in obj && obj.attributeName) {
      switch (obj.attributeName) {
        case "SOURCE_VCN_ID":
          return model.SourceVcnIdCondition.getDeserializedJsonObj(
            <model.SourceVcnIdCondition>(<object>jsonObj),
            true
          );
        case "SOURCE_IP_ADDRESS":
          return model.SourceIpAddressCondition.getDeserializedJsonObj(
            <model.SourceIpAddressCondition>(<object>jsonObj),
            true
          );
        case "PATH":
          return model.PathMatchCondition.getDeserializedJsonObj(
            <model.PathMatchCondition>(<object>jsonObj),
            true
          );
        case "SOURCE_VCN_IP_ADDRESS":
          return model.SourceVcnIpAddressCondition.getDeserializedJsonObj(
            <model.SourceVcnIpAddressCondition>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.attributeName);
      }
    }
    return jsonObj;
  }
}
