/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
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

export interface BulkMoveResourcesDetails {
  /**
   * The resources to be moved.
   *
   */
  "resources": Array<model.BulkActionResource>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the destination compartment
   * into which to move the resources.
   *
   */
  "targetCompartmentId": string;
}

export namespace BulkMoveResourcesDetails {
  export function getJsonObj(obj: BulkMoveResourcesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.BulkActionResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkMoveResourcesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.BulkActionResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
