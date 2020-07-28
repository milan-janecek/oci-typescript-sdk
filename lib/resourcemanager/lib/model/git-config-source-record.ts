/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Metadata about the Git configuration source.
 *
 */
export interface GitConfigSourceRecord extends model.ConfigSourceRecord {
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm))
   * for the Git configuration source.
   *
   */
  "configurationSourceProviderId": string;
  /**
   * The URL of the Git repository.
   */
  "repositoryUrl"?: string;
  /**
   * The name of the branch within the Git repository.
   */
  "branchName"?: string;
  /**
   * The unique identifier (SHA-1 hash) of the individual change to the Git repository.
   */
  "commitId"?: string;

  "configSourceRecordType": string;
}

export namespace GitConfigSourceRecord {
  export function getJsonObj(obj: GitConfigSourceRecord, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSourceRecord.getJsonObj(obj) as GitConfigSourceRecord)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceRecordType = "GIT_CONFIG_SOURCE";
}