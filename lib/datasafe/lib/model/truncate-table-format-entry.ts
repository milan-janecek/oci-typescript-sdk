/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The Truncate Table masking format drops all the rows in a table. If one of the
 * columns in a table is masked using Truncate Table, the entire table is truncated,
 * so no other masking format can be used for any of the other columns in that table.
 * If a table is being truncated, it cannot be referred to by a foreign key constraint
 * or a dependent column. To learn more, check Truncate Table in the Data Safe documentation.
 *
 */
export interface TruncateTableFormatEntry extends model.FormatEntry {
  "type": string;
}

export namespace TruncateTableFormatEntry {
  export function getJsonObj(obj: TruncateTableFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as TruncateTableFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TRUNCATE_TABLE";
  export function getDeserializedJsonObj(
    obj: TruncateTableFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as TruncateTableFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}