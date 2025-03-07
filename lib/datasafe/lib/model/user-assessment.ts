/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details of the user assessment, which includes statistics related to target database users.
 */
export interface UserAssessment {
  /**
   * The OCID of the compartment that contains the user assessment.
   */
  "compartmentId": string;
  /**
   * The description of the user assessment.
   */
  "description"?: string;
  /**
   * The display name of the user assessment.
   */
  "displayName": string;
  /**
   * The OCID of the user assessment.
   */
  "id": string;
  /**
   * List containing maps as values.
   * Example: `{\"Operations\": [ {\"CostCenter\": \"42\"} ] }`
   *
   */
  "ignoredTargets"?: Array<any>;
  /**
   * List containing maps as values.
   * Example: `{\"Operations\": [ {\"CostCenter\": \"42\"} ] }`
   *
   */
  "ignoredAssessmentIds"?: Array<any>;
  /**
   * Indicates if the user assessment is set as a baseline. This is applicable only to saved user assessments.
   */
  "isBaseline"?: boolean;
  /**
   * Indicates if the user assessment deviates from the baseline.
   */
  "isDeviatedFromBaseline"?: boolean;
  /**
   * The OCID of the last user assessment baseline against which the latest assessment was compared.
   */
  "lastComparedBaselineId"?: string;
  /**
   * The current state of the user assessment.
   */
  "lifecycleState": model.UserAssessmentLifecycleState;
  /**
   * Details about the current state of the user assessment.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the user assessment that is responsible for creating this scheduled save assessment.
   */
  "scheduleAssessmentId"?: string;
  /**
    * Schedule of the assessment that runs periodically in this specified format:
*   <version-string>;<version-specific-schedule>
* <p>
  Allowed version strings - \"v1\"
*   v1's version specific schedule -<ss> <mm> <hh> <day-of-week> <day-of-month>
*   Each of the above fields potentially introduce constraints. A workrequest is created only
*   when clock time satisfies all the constraints. Constraints introduced:
*   1. seconds = <ss> (So, the allowed range for <ss> is [0, 59])
*   2. minutes = <mm> (So, the allowed range for <mm> is [0, 59])
*   3. hours = <hh> (So, the allowed range for <hh> is [0, 23])
*   <day-of-week> can be either '*' (without quotes or a number between 1(Monday) and 7(Sunday))
*   4. No constraint introduced when it is '*'. When not, day of week must equal the given value
*   <day-of-month> can be either '*' (without quotes or a number between 1 and 28)
*   5. No constraint introduced when it is '*'. When not, day of month must equal the given value
* 
    */
  "schedule"?: string;
  /**
   * Map that contains maps of values.
   *  Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "statistics"?: { [key: string]: { [key: string]: any } };
  /**
   * Array of database target OCIDs.
   */
  "targetIds"?: Array<string>;
  /**
   * The date and time the user assessment was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the user assessment was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * Indicates whether the user assessment was created by system or user.
   */
  "triggeredBy"?: UserAssessment.TriggeredBy;
  /**
    * Type of user assessment. Type can be:
* <p>
LATEST: The most up-to-date assessment that is running automatically for a target. It is system generated.
* SAVED: A saved user assessment. LATEST assessments will always be saved to maintain the history of runs. A SAVED assessment is also generated by a 'refresh' action (triggered by the user).
* SAVE_SCHEDULE: A schedule to periodically save LATEST assessments.
* COMPARTMENT: An automatic managed assessment type that stores all details of targets in one compartment. This will keep an up-to-date status of all database risks in one compartment.
*       It is automatically updated once the latest assessment or refresh action is executed, as well as when a target is deleted or move to a different compartment.
* 
    */
  "type": UserAssessment.Type;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UserAssessment {
  export enum TriggeredBy {
    User = "USER",
    System = "SYSTEM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Latest = "LATEST",
    Saved = "SAVED",
    SaveSchedule = "SAVE_SCHEDULE",
    Compartment = "COMPARTMENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UserAssessment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserAssessment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
