/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * An object in Object Storage that contains a list of input files.
 */
export interface ObjectListFileInputLocation extends model.InputLocation {
  "objectLocation": model.ObjectLocation;

  "locationType": string;
}

export namespace ObjectListFileInputLocation {
  export function getJsonObj(obj: ObjectListFileInputLocation, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputLocation.getJsonObj(obj) as ObjectListFileInputLocation)),
      ...{
        "objectLocation": obj.objectLocation
          ? model.ObjectLocation.getJsonObj(obj.objectLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export const locationType = "OBJECT_LIST_FILE_INPUT_LOCATION";
  export function getDeserializedJsonObj(
    obj: ObjectListFileInputLocation,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputLocation.getDeserializedJsonObj(obj) as ObjectListFileInputLocation)),
      ...{
        "objectLocation": obj.objectLocation
          ? model.ObjectLocation.getDeserializedJsonObj(obj.objectLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
