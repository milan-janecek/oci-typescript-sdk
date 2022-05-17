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
* Validates a definedTag value. Each validator performs validation steps in addition to the standard
* validation for definedTag values. For more information, see
* [Limits on Tags](https://docs.cloud.oracle.com/Content/Tagging/Concepts/taggingoverview.htm#limits).
* <p>
If you define a validator after a value has been set for a defined tag, then any updates that
* attempt to change the value must pass the additional validation defined by the current rule.
* Previously set values (even those that would fail the current validation) are not updated. You can
* still update other attributes to resources that contain a non-valid defined tag.
* <p>
To clear the validator call UpdateTag with
* [DefaultTagDefinitionValidator](https://docs.cloud.oracle.com/api/#/en/identity/latest/datatypes/DefaultTagDefinitionValidator).
* 
*/
export interface BaseTagDefinitionValidator {
  "validatorType": string;
}

export namespace BaseTagDefinitionValidator {
  export function getJsonObj(obj: BaseTagDefinitionValidator): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "validatorType" in obj && obj.validatorType) {
      switch (obj.validatorType) {
        case "DEFAULT":
          return model.DefaultTagDefinitionValidator.getJsonObj(
            <model.DefaultTagDefinitionValidator>(<object>jsonObj),
            true
          );
        case "ENUM":
          return model.EnumTagDefinitionValidator.getJsonObj(
            <model.EnumTagDefinitionValidator>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.validatorType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BaseTagDefinitionValidator): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "validatorType" in obj && obj.validatorType) {
      switch (obj.validatorType) {
        case "DEFAULT":
          return model.DefaultTagDefinitionValidator.getDeserializedJsonObj(
            <model.DefaultTagDefinitionValidator>(<object>jsonObj),
            true
          );
        case "ENUM":
          return model.EnumTagDefinitionValidator.getDeserializedJsonObj(
            <model.EnumTagDefinitionValidator>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.validatorType);
      }
    }
    return jsonObj;
  }
}
