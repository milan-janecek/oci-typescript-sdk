/**
 * OSP Gateway API
 * This site describes all the Rest endpoints of OSP Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
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
 * Invoice line list
 */
export interface InvoiceLineCollection {
  /**
   * Invoice line list elements
   */
  "items": Array<model.InvoiceLineSummary>;
}

export namespace InvoiceLineCollection {
  export function getJsonObj(obj: InvoiceLineCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.InvoiceLineSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InvoiceLineCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.InvoiceLineSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}