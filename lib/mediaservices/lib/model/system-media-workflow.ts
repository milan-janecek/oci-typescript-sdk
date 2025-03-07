/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
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
 * A named list of tasks to be used to run a job or as a template to create a MediaWorkflow.
 */
export interface SystemMediaWorkflow {
  /**
   * System provided unique identifier for this static media workflow.
   */
  "name": string;
  /**
   * Description of this workflow's processing and how that processing can be customized by
   * specifying parameter values.
   *
   */
  "description"?: string;
  /**
   * JSON object representing named parameters and their default values that can be referenced throughout this workflow.
   * The values declared here can be overridden by the MediaWorkflowConfigurations or parameters supplied when creating
   * MediaWorkflowJobs from this MediaWorkflow.
   *
   */
  "parameters"?: { [key: string]: string };
  /**
   * The processing to be done in this workflow. Each key of the MediaWorkflowTasks in this array is unique
   * within the array. The order of the items is preserved from the order of the tasks array in
   * CreateMediaWorkflowDetails or UpdateMediaWorkflowDetails.
   *
   */
  "tasks": Array<model.MediaWorkflowTask>;
}

export namespace SystemMediaWorkflow {
  export function getJsonObj(obj: SystemMediaWorkflow): object {
    const jsonObj = {
      ...obj,
      ...{
        "tasks": obj.tasks
          ? obj.tasks.map(item => {
              return model.MediaWorkflowTask.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SystemMediaWorkflow): object {
    const jsonObj = {
      ...obj,
      ...{
        "tasks": obj.tasks
          ? obj.tasks.map(item => {
              return model.MediaWorkflowTask.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
