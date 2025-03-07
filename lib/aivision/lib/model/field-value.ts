/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * The value of a form field.
 */
export interface FieldValue {
  /**
   * The detected text of a field.
   */
  "text"?: string;
  /**
   * The confidence score between 0 and 1. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence": number;
  "boundingPolygon": model.BoundingPolygon;
  /**
   * The indexes of the words in the field value.
   */
  "wordIndexes": Array<number>;

  "valueType": string;
}

export namespace FieldValue {
  export function getJsonObj(obj: FieldValue): object {
    const jsonObj = {
      ...obj,
      ...{
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    if (obj && "valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "TIME":
          return model.ValueTime.getJsonObj(<model.ValueTime>(<object>jsonObj), true);
        case "INTEGER":
          return model.ValueInteger.getJsonObj(<model.ValueInteger>(<object>jsonObj), true);
        case "DATE":
          return model.ValueDate.getJsonObj(<model.ValueDate>(<object>jsonObj), true);
        case "NUMBER":
          return model.ValueNumber.getJsonObj(<model.ValueNumber>(<object>jsonObj), true);
        case "STRING":
          return model.ValueString.getJsonObj(<model.ValueString>(<object>jsonObj), true);
        case "PHONE_NUMBER":
          return model.ValuePhoneNumber.getJsonObj(<model.ValuePhoneNumber>(<object>jsonObj), true);
        case "ARRAY":
          return model.ValueArray.getJsonObj(<model.ValueArray>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FieldValue): object {
    const jsonObj = {
      ...obj,
      ...{
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getDeserializedJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    if (obj && "valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "TIME":
          return model.ValueTime.getDeserializedJsonObj(<model.ValueTime>(<object>jsonObj), true);
        case "INTEGER":
          return model.ValueInteger.getDeserializedJsonObj(
            <model.ValueInteger>(<object>jsonObj),
            true
          );
        case "DATE":
          return model.ValueDate.getDeserializedJsonObj(<model.ValueDate>(<object>jsonObj), true);
        case "NUMBER":
          return model.ValueNumber.getDeserializedJsonObj(
            <model.ValueNumber>(<object>jsonObj),
            true
          );
        case "STRING":
          return model.ValueString.getDeserializedJsonObj(
            <model.ValueString>(<object>jsonObj),
            true
          );
        case "PHONE_NUMBER":
          return model.ValuePhoneNumber.getDeserializedJsonObj(
            <model.ValuePhoneNumber>(<object>jsonObj),
            true
          );
        case "ARRAY":
          return model.ValueArray.getDeserializedJsonObj(<model.ValueArray>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
}
