/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations in Cloud Guard from any region.

 * OpenAPI spec version: 20200131
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
 * Summary of the Responder Execution.
 */
export interface ResponderExecutionSummary {
  /**
   * The unique identifier of the responder execution
   */
  "id": string;
  /**
   * Responder Rule id for the responder execution
   */
  "responderRuleId": string;
  /**
   * Rule Type for the responder execution
   */
  "responderRuleType": model.ResponderType;
  /**
   * Rule name for the responder execution
   */
  "responderRuleName": string;
  /**
   * Problem id associated with the responder execution
   */
  "problemId": string;
  /**
   * Problem name associated with the responder execution
   */
  "problemName": string;
  /**
   * Region where the problem is found
   */
  "region": string;
  /**
   * Target Id of the problem for the responder execution
   */
  "targetId": string;
  /**
   * compartment id of the problem for the responder execution
   */
  "compartmentId": string;
  /**
   * resource type of the problem for the responder execution
   */
  "resourceType": string;
  /**
   * resource name of the problem for the responder execution. TODO-DOC link to resource definition doc
   */
  "resourceName": string;
  /**
   * The date and time the responder execution was created. Format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the responder execution was updated. Format defined by RFC3339.
   */
  "timeCompleted"?: Date;
  /**
   * current execution status of the responder
   */
  "responderExecutionStatus": model.ResponderExecutionStates;
  /**
   * possible type of responder execution modes
   */
  "responderExecutionMode": model.ResponderExecutionModes;
  /**
   * Message about the responder execution.
   */
  "message"?: string;
  "responderRuleExecutionDetails"?: model.ResponderRuleExecutionDetails;
}

export namespace ResponderExecutionSummary {
  export function getJsonObj(obj: ResponderExecutionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRuleExecutionDetails": obj.responderRuleExecutionDetails
          ? model.ResponderRuleExecutionDetails.getJsonObj(obj.responderRuleExecutionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResponderExecutionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRuleExecutionDetails": obj.responderRuleExecutionDetails
          ? model.ResponderRuleExecutionDetails.getDeserializedJsonObj(
              obj.responderRuleExecutionDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
