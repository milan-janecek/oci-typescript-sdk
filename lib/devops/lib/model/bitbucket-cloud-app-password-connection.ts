/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The properties that define a connection of the type `BITBUCKET_CLOUD_APP_PASSWORD`.
 * This type corresponds to a connection in Bitbucket Cloud that is authenticated with a App Password along with username.
 *
 */
export interface BitbucketCloudAppPasswordConnection extends model.Connection {
  /**
   * Public Bitbucket Cloud Username in plain text
   */
  "username": string;
  /**
   * OCID of personal Bitbucket Cloud AppPassword saved in secret store
   */
  "appPassword": string;

  "connectionType": string;
}

export namespace BitbucketCloudAppPasswordConnection {
  export function getJsonObj(
    obj: BitbucketCloudAppPasswordConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getJsonObj(obj) as BitbucketCloudAppPasswordConnection)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "BITBUCKET_CLOUD_APP_PASSWORD";
  export function getDeserializedJsonObj(
    obj: BitbucketCloudAppPasswordConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as BitbucketCloudAppPasswordConnection)),
      ...{}
    };

    return jsonObj;
  }
}