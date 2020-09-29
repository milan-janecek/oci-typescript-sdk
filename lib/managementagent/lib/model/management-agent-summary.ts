/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * The summary of the Management Agent inventory including the associated plugins.
 */
export interface ManagementAgentSummary {
  /**
   * agent identifier
   */
  "id": string;
  /**
   * agent install key identifier
   */
  "installKeyId"?: string;
  /**
   * Management Agent Name
   */
  "displayName"?: string;
  /**
   * Platform Type
   */
  "platformType"?: model.PlatformTypes;
  /**
   * Platform Name
   */
  "platformName"?: string;
  /**
   * Platform Version
   */
  "platformVersion"?: string;
  /**
   * Management Agent Version
   */
  "version": string;
  /**
   * true if the agent can be upgraded automatically; false if it must be upgraded manually. true is currently unsupported.
   */
  "isAgentAutoUpgradable"?: boolean;
  /**
   * The time the Management Agent was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * Management Agent host machine name
   */
  "host"?: string;
  /**
   * list of managementAgentPlugins associated with the agent
   */
  "pluginList"?: Array<model.ManagementAgentPluginDetails>;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * The current state of managementAgent
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagementAgentSummary {
  export function getJsonObj(obj: ManagementAgentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "pluginList": obj.pluginList
          ? obj.pluginList.map(item => {
              return model.ManagementAgentPluginDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}