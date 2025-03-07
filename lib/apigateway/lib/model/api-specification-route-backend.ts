/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * The backend to forward requests to.
 *
 */
export interface ApiSpecificationRouteBackend {
  "type": string;
}

export namespace ApiSpecificationRouteBackend {
  export function getJsonObj(obj: ApiSpecificationRouteBackend): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "HTTP_BACKEND":
          return model.HTTPBackend.getJsonObj(<model.HTTPBackend>(<object>jsonObj), true);
        case "ORACLE_FUNCTIONS_BACKEND":
          return model.OracleFunctionBackend.getJsonObj(
            <model.OracleFunctionBackend>(<object>jsonObj),
            true
          );
        case "STOCK_RESPONSE_BACKEND":
          return model.StockResponseBackend.getJsonObj(
            <model.StockResponseBackend>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApiSpecificationRouteBackend): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "HTTP_BACKEND":
          return model.HTTPBackend.getDeserializedJsonObj(
            <model.HTTPBackend>(<object>jsonObj),
            true
          );
        case "ORACLE_FUNCTIONS_BACKEND":
          return model.OracleFunctionBackend.getDeserializedJsonObj(
            <model.OracleFunctionBackend>(<object>jsonObj),
            true
          );
        case "STOCK_RESPONSE_BACKEND":
          return model.StockResponseBackend.getDeserializedJsonObj(
            <model.StockResponseBackend>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
