/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details for the create cloud Autonomous VM cluster operation.
 *
 */
export interface CreateCloudAutonomousVmClusterDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * User defined description of the cloud Autonomous VM cluster.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the cloud Autonomous VM Cluster is associated with.
   *
   */
  "subnetId": string;
  /**
   * The user-friendly name for the cloud Autonomous VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.
   */
  "cloudExadataInfrastructureId": string;
  /**
   * The Oracle license model that applies to the Oracle Autonomous Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle PaaS and IaaS services in the cloud.
   * License Included allows you to subscribe to new Oracle Database software licenses and the Database service.
   * Note that when provisioning an Autonomous Database on [dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null because the attribute is already set at the
   * Autonomous Exadata Infrastructure level. When using [shared Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), if a value is not specified, the system will supply the value of `BRING_YOUR_OWN_LICENSE`.
   *
   */
  "licenseModel"?: CreateCloudAutonomousVmClusterDetails.LicenseModel;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds list cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateCloudAutonomousVmClusterDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: CreateCloudAutonomousVmClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCloudAutonomousVmClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
