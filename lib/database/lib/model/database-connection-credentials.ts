/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Credentials used to connect to the database. Currently only the `DETAILS` type is supported for creating MACS connector crendentials.
 *
 */
export interface DatabaseConnectionCredentials {
  "credentialType": string;
}

export namespace DatabaseConnectionCredentials {
  export function getJsonObj(obj: DatabaseConnectionCredentials): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "NAME_REFERENCE":
          return model.DatabaseConnectionCredentailsByName.getJsonObj(
            <model.DatabaseConnectionCredentailsByName>(<object>jsonObj),
            true
          );
        case "SSL_DETAILS":
          return model.DatabaseSslConnectionCredentials.getJsonObj(
            <model.DatabaseSslConnectionCredentials>(<object>jsonObj),
            true
          );
        case "DETAILS":
          return model.DatabaseConnectionCredentialsByDetails.getJsonObj(
            <model.DatabaseConnectionCredentialsByDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.credentialType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseConnectionCredentials): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "NAME_REFERENCE":
          return model.DatabaseConnectionCredentailsByName.getDeserializedJsonObj(
            <model.DatabaseConnectionCredentailsByName>(<object>jsonObj),
            true
          );
        case "SSL_DETAILS":
          return model.DatabaseSslConnectionCredentials.getDeserializedJsonObj(
            <model.DatabaseSslConnectionCredentials>(<object>jsonObj),
            true
          );
        case "DETAILS":
          return model.DatabaseConnectionCredentialsByDetails.getDeserializedJsonObj(
            <model.DatabaseConnectionCredentialsByDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.credentialType);
      }
    }
    return jsonObj;
  }
}
