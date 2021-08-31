/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A list of job definition resources. Job definitions define the harvest scope and includes the list of objects
 * to be harvested along with a schedule. The list of objects is usually specified through a combination of object
 * type, regular expressions, or specific names of objects and a sample size for the data harvested.
 *
 */
export interface JobDefinitionSummary {
  /**
   * Unique key of the job definition resource that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the job definition.
   */
  "description"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * URI to the job definition instance in the API.
   */
  "uri"?: string;
  /**
   * Type of the job definition.
   */
  "jobType"?: model.JobType;
  /**
   * Lifecycle state of the job definition.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Specify if sample data to be extracted as part of this harvest.
   */
  "isSampleDataExtracted"?: boolean;
  /**
   * The date and time the job definition was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The key of the connection resource used in harvest, sampling, profiling jobs.
   *
   */
  "connectionKey"?: string;
  /**
   * Time that the latest job execution started. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeLatestExecutionStarted"?: Date;
  /**
   * Time that the latest job execution ended or null if it hasn't yet completed.
   * An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeLatestExecutionEnded"?: Date;
  /**
   * Status of the latest job execution, such as running, paused, or completed.
   */
  "jobExecutionState"?: model.JobExecutionState;
  /**
   * Type of job schedule for the latest job executed.
   */
  "scheduleType"?: model.JobScheduleType;
  /**
   * Unique key of the data asset to which this job applies, if the job involves a data asset.
   */
  "dataAssetKey"?: string;
}

export namespace JobDefinitionSummary {
  export function getJsonObj(obj: JobDefinitionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobDefinitionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
