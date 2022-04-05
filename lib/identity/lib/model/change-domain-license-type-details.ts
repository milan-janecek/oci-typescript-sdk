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

/**
 * (For tenancies that support identity domains) Details for updating the license type of the identity domain.
 */
export interface ChangeDomainLicenseTypeDetails {
  /**
   * The license type of the identity domain.
   */
  "licenseType"?: string;
}

export namespace ChangeDomainLicenseTypeDetails {
  export function getJsonObj(obj: ChangeDomainLicenseTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeDomainLicenseTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
