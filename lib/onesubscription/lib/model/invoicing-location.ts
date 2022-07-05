/**
 * OneSubscription APIs
 * OneSubscription APIs

 * OpenAPI spec version: 20190111
 * Contact: kuaskum_org_ww@oracle.com
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
 * Address location.
 *
 */
export interface InvoicingLocation {
  /**
   * Address first line.
   *
   */
  "address1"?: string;
  /**
   * Address second line.
   *
   */
  "address2"?: string;
  /**
   * Postal code.
   *
   */
  "postalCode"?: string;
  /**
   * City.
   *
   */
  "city"?: string;
  /**
   * Country.
   *
   */
  "country"?: string;
  /**
   * Region.
   *
   */
  "region"?: string;
  /**
   * TCA Location identifier.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tcaLocationId"?: number;
}

export namespace InvoicingLocation {
  export function getJsonObj(obj: InvoicingLocation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InvoicingLocation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}