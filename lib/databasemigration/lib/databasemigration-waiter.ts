/**
 * REST API for Zero Downtime Migration (Oracle Database Migration Service --ODMS-- as customer-facing service name)
 * Provides users the ability to perform Zero Downtime migration operations
 * OpenAPI spec version: 20200720
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DatabaseMigrationClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DatabaseMigrationWaiter {
  public constructor(
    private client: DatabaseMigrationClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAgent till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAgentResponse | null (null in case of 404 response)
   */
  public async forAgent(
    request: serviceRequests.GetAgentRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetAgentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAgent(request),
      response => targetStates.includes(response.agent.lifecycleState!),
      targetStates.includes(models.LifecycleStates.Deleted)
    );
  }

  /**
   * Waits forConnection till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConnectionResponse | null (null in case of 404 response)
   */
  public async forConnection(
    request: serviceRequests.GetConnectionRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getConnection(request),
      response => targetStates.includes(response.connection.lifecycleState!),
      targetStates.includes(models.LifecycleStates.Deleted)
    );
  }

  /**
   * Waits forJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobResponse | null (null in case of 404 response)
   */
  public async forJob(
    request: serviceRequests.GetJobRequest,
    ...targetStates: models.JobLifecycleStates[]
  ): Promise<serviceResponses.GetJobResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getJob(request),
      response => targetStates.includes(response.job.lifecycleState!),
      targetStates.includes(models.JobLifecycleStates.Terminated)
    );
  }

  /**
   * Waits forMigration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMigrationResponse | null (null in case of 404 response)
   */
  public async forMigration(
    request: serviceRequests.GetMigrationRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetMigrationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMigration(request),
      response => targetStates.includes(response.migration.lifecycleState!),
      targetStates.includes(models.LifecycleStates.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}