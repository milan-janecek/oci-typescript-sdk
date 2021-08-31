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
 * Job log details. A job log is an audit log record inserted during the lifecycle of a job execution instance.
 *
 */
export interface JobLog {
  /**
   * Unique key of the job log that is immutable.
   */
  "key": string;
  /**
   * The unique key of the parent job execution for which the log resource was created.
   */
  "jobExecutionKey"?: string;
  /**
   * OCID of the user who created the log record for this job. Usually the executor of the job instance.
   *
   */
  "createdById"?: string;
  /**
   * OCID of the user who created the log record for this job. Usually the executor of the job instance.
   *
   */
  "updatedById"?: string;
  /**
   * Job log update time. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The date and time the job log was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * Severity level for this log.
   */
  "severity"?: string;
  /**
   * Message for this job log.
   */
  "logMessage"?: string;
  /**
   * URI to the job log instance in the API.
   */
  "uri"?: string;
}

export namespace JobLog {
  export function getJsonObj(obj: JobLog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobLog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
