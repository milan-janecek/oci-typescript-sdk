/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

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
 * User credential details to connect to the database. This is supplied via the External Database Service.
 *
 */
export interface CredentialDetails {
  /**
   * Credential source name that had been added in Management Agent wallet. This is supplied in the External Database Service.
   */
  "credentialSourceName": string;

  "credentialType": string;
}

export namespace CredentialDetails {
  export function getJsonObj(obj: CredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "CREDENTIALS_BY_SOURCE":
          return model.CredentialsBySource.getJsonObj(
            <model.CredentialsBySource>(<object>jsonObj),
            true
          );
        case "CREDENTIALS_BY_VAULT":
          return model.CredentialByVault.getJsonObj(
            <model.CredentialByVault>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.credentialType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "CREDENTIALS_BY_SOURCE":
          return model.CredentialsBySource.getDeserializedJsonObj(
            <model.CredentialsBySource>(<object>jsonObj),
            true
          );
        case "CREDENTIALS_BY_VAULT":
          return model.CredentialByVault.getDeserializedJsonObj(
            <model.CredentialByVault>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.credentialType);
      }
    }
    return jsonObj;
  }
}
