/**
 *
 *
 * OpenAPI spec version: 20210610
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/RemoveFleetInstallationSites.ts.html |here} to see how to use RemoveFleetInstallationSitesRequest.
 */
export interface RemoveFleetInstallationSitesRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "fleetId": string;
  /**
   * List of installation sites to be deleted.
   */
  "removeFleetInstallationSitesDetails": model.RemoveFleetInstallationSitesDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call
   * for a resource, set the `if-match` parameter to the value of the
   * ETag from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the ETag you
   * provide matches the resource's current ETag value.
   *
   */
  "ifMatch"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}