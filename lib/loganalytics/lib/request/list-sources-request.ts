/**
 *
 *
 * OpenAPI spec version: 20200601
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
export interface ListSourcesRequest extends common.BaseRequest {
  /**
   * The Log Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * entityType
   */
  "entityType"?: string;
  /**
   * search by source display name or description
   */
  "sourceDisplayText"?: string;
  /**
   * Is system param of value (all, custom, sourceUsing)
   *
   */
  "isSystem"?: ListSourcesRequest.IsSystem;
  /**
   * auto association flag
   */
  "isAutoAssociated"?: boolean;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListSourcesRequest.SortOrder;
  /**
   * sort by source
   */
  "sortBy"?: ListSourcesRequest.SortBy;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * A filter to return only log analytics entities whose name matches the entire name given. The match
   * is case-insensitive.
   *
   */
  "name"?: string;
  /**
   * is simplified
   */
  "isSimplified"?: boolean;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListSourcesRequest {
  export enum IsSystem {
    All = "ALL",
    Custom = "CUSTOM",
    BuiltIn = "BUILT_IN"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "name",
    TimeUpdated = "timeUpdated",
    AssociationCount = "associationCount",
    SourceType = "sourceType"
  }
}