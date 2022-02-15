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
 * The SQL Expression masking format uses a SQL expression to generate values
 * that are used to replace the original data values. SQL expressions with
 * dbms_lob and other user-defined functions can be used to mask columns of
 * Large Object data type (LOB). To learn more, check SQL Expression in the
 * Data Safe documentation.
 *
 */
export interface SQLExpressionFormatEntry extends model.FormatEntry {
  /**
   * The SQL expression to be used to generate the masked values. It can
   * consist of one or more values, operators, and SQL functions that
   * evaluate to a value. It can also contain substitution columns from
   * the same table. Specify the substitution columns within percent (%)
   * symbols.
   *
   */
  "sqlExpression": string;

  "type": string;
}

export namespace SQLExpressionFormatEntry {
  export function getJsonObj(obj: SQLExpressionFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as SQLExpressionFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SQL_EXPRESSION";
  export function getDeserializedJsonObj(
    obj: SQLExpressionFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as SQLExpressionFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}