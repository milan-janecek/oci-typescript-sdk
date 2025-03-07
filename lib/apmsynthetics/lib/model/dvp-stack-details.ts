/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * Details of DVP Stack.
 */
export interface DvpStackDetails {
  /**
   * Version of DVP.
   */
  "dvpVersion": string;

  "dvpStackType": string;
}

export namespace DvpStackDetails {
  export function getJsonObj(obj: DvpStackDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dvpStackType" in obj && obj.dvpStackType) {
      switch (obj.dvpStackType) {
        case "ORACLE_RM_STACK":
          return model.OracleRMStack.getJsonObj(<model.OracleRMStack>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.dvpStackType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DvpStackDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dvpStackType" in obj && obj.dvpStackType) {
      switch (obj.dvpStackType) {
        case "ORACLE_RM_STACK":
          return model.OracleRMStack.getDeserializedJsonObj(
            <model.OracleRMStack>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.dvpStackType);
      }
    }
    return jsonObj;
  }
}
