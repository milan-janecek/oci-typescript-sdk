/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Possible operation types.
 **/
export enum OperationTypes {
  CreateBds = "CREATE_BDS",
  UpdateBds = "UPDATE_BDS",
  DeleteBds = "DELETE_BDS",
  AddBlockStorage = "ADD_BLOCK_STORAGE",
  AddWorkerNodes = "ADD_WORKER_NODES",
  AddCloudSql = "ADD_CLOUD_SQL",
  RemoveCloudSql = "REMOVE_CLOUD_SQL",
  ChangeCompartmentForBds = "CHANGE_COMPARTMENT_FOR_BDS",
  ChangeShape = "CHANGE_SHAPE",
  UpdateInfra = "UPDATE_INFRA",
  RestartNode = "RESTART_NODE",
  RemoveNode = "REMOVE_NODE",
  CreateAutoscaleConfig = "CREATE_AUTOSCALE_CONFIG",
  UpdateAutoscaleConfig = "UPDATE_AUTOSCALE_CONFIG",
  DeleteAutoscaleConfig = "DELETE_AUTOSCALE_CONFIG",
  AutoscaleConfig = "AUTOSCALE_CONFIG",
  AutoscaleRun = "AUTOSCALE_RUN",
  CreateApiKey = "CREATE_API_KEY",
  DeleteApiKey = "DELETE_API_KEY",
  TestObjectStoreConnection = "TEST_OBJECT_STORE_CONNECTION",
  CreateMetastoreConfig = "CREATE_METASTORE_CONFIG",
  DeleteMetastoreConfig = "DELETE_METASTORE_CONFIG",
  UpdateMetastoreConfig = "UPDATE_METASTORE_CONFIG",
  ActivateMetastoreConfig = "ACTIVATE_METASTORE_CONFIG",
  TestMetastoreConfig = "TEST_METASTORE_CONFIG",
  PatchBds = "PATCH_BDS",
  PatchOdh = "PATCH_ODH",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationTypes {
  export function getJsonObj(obj: OperationTypes): OperationTypes {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationTypes): OperationTypes {
    return obj;
  }
}
