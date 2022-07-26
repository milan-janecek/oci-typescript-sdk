/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Subscription information for compartmentId. Only root compartments are allowed.
 */
export interface Subscription {
  /**
   * OCID of the subscription details for particular root compartment or tenancy.
   */
  "id": string;
  /**
   * Subscription id.
   */
  "classicSubscriptionId": string;
  /**
   * The type of subscription, such as 'CLOUDCM'/'SAAS'/'CRM', etc.
   */
  "serviceName": string;
  /**
   * Stock keeping unit.
   */
  "skus": Array<model.SubscriptionSku>;
}

export namespace Subscription {
  export function getJsonObj(obj: Subscription): object {
    const jsonObj = {
      ...obj,
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.SubscriptionSku.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Subscription): object {
    const jsonObj = {
      ...obj,
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.SubscriptionSku.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}