/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Properties used in entity update operations.
 */
export interface UpdateEntityDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Optional user friendly business name of the data entity. If set, this supplements the harvested display name of the object.
   */
  "businessName"?: string;
  /**
   * Detailed description of a data entity.
   */
  "description"?: string;
  /**
   * Last modified timestamp of the object in the external system.
   */
  "timeExternal"?: Date;
  /**
   * Property to indicate if the object is a physical materialized object or virtual. For example, View.
   */
  "isLogical"?: boolean;
  /**
   * Property to indicate if the object is a sub object of a parent physical object.
   */
  "isPartition"?: boolean;
  /**
   * Key of the associated folder.
   */
  "folderKey"?: string;
  /**
   * Key of the associated pattern if this is a logical entity.
   */
  "patternKey"?: string;
  /**
   * The expression realized after resolving qualifiers . Used in deriving this logical entity
   */
  "realizedExpression"?: string;
  /**
   * Status of the object as updated by the harvest process. When an entity object is created, it's harvest status
   * will indicate if the entity's metadata has been fully harvested or not. The harvest process can perform
   * shallow harvesting to allow users to browse the metadata and can on-demand deep harvest on any object
   * This requires a harvest status indicator for catalog objects.
   *
   */
  "harvestStatus"?: model.HarvestStatus;
  /**
   * Key of the last harvest process to update this object.
   */
  "lastJobKey"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertySetUsage>;
  /**
   * A map of maps that contains the properties which are specific to the entity type. Each entity type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * entities have required properties within the \"default\" category. To determine the set of required and
   * optional properties for an entity type, a query can be done on '/types?type=dataEntity' that returns a
   * collection of all entity types. The appropriate entity type, which includes definitions of all of
   * it's properties, can be identified from this collection.
   * Example: `{\"properties\": { \"default\": { \"key1\": \"value1\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace UpdateEntityDetails {
  export function getJsonObj(obj: UpdateEntityDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
