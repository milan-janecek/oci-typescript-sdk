/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Specifies which fields and the data for each to update on the specified stack.
 *
 */
export interface UpdateStackDetails {
  /**
   * The name of the stack.
   */
  "displayName"?: string;
  /**
   * Description of the stack.
   */
  "description"?: string;
  "configSource"?:
    | model.UpdateGitConfigSourceDetails
    | model.UpdateObjectStorageConfigSourceDetails
    | model.UpdateZipUploadConfigSourceDetails;
  "customTerraformProvider"?: model.CustomTerraformProvider;
  /**
   * When `true`, changes the stack's sourcing of third-party Terraform providers to
   * [Terraform Registry](https://registry.terraform.io/browse/providers) and allows
   * {@link #customTerraformProvider(CustomTerraformProviderRequest) customTerraformProvider}.
   * Applies to older stacks that use Terraform version 0.12.x and 0.13.x only.
   * (Older stacks that use other Terraform versions are automatically updated.)
   * Once set to `true`, cannot be reverted.
   * For more information about stack sourcing of third-party Terraform providers, see
   * [Third-party Provider Configuration](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Concepts/terraformconfigresourcemanager.htm#third-party-providers).
   *
   */
  "isThirdPartyProviderExperienceEnabled"?: boolean;
  /**
   * Terraform variables associated with this resource.
   * The maximum number of variables supported is 250.
   * The maximum size of each variable, including both name and value, is 8192 bytes.
   * Example: `{\"CompartmentId\": \"compartment-id-value\"}`
   *
   */
  "variables"?: { [key: string]: string };
  /**
   * The version of Terraform to use with the stack. Example: `0.12.x`
   *
   */
  "terraformVersion"?: string;
  /**
   * Free-form tags associated with this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateStackDetails {
  export function getJsonObj(obj: UpdateStackDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configSource": obj.configSource
          ? model.UpdateConfigSourceDetails.getJsonObj(obj.configSource)
          : undefined,
        "customTerraformProvider": obj.customTerraformProvider
          ? model.CustomTerraformProvider.getJsonObj(obj.customTerraformProvider)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateStackDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configSource": obj.configSource
          ? model.UpdateConfigSourceDetails.getDeserializedJsonObj(obj.configSource)
          : undefined,
        "customTerraformProvider": obj.customTerraformProvider
          ? model.CustomTerraformProvider.getDeserializedJsonObj(obj.customTerraformProvider)
          : undefined
      }
    };

    return jsonObj;
  }
}
