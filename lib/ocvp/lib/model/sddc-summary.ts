/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
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
 * A summary of the SDDC.
 */
export interface SddcSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that
   * contains the SDDC.
   *
   */
  "id": string;
  /**
   * The availability domain that the SDDC's ESXi hosts are running in. For Multi-AD SDDC, it is `multi-AD`.
   *
   */
  "computeAvailabilityDomain": string;
  /**
   * A descriptive name for the SDDC. It must be unique, start with a letter, and contain only letters, digits,
   * whitespaces, dashes and underscores.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
    * In general, this is a specific version of bundled VMware software supported by
* Oracle Cloud VMware Solution (see
* {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}).
* <p>
This attribute is not guaranteed to reflect the version of
* software currently installed on the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the version of software that the Oracle
* Cloud VMware Solution will install on any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you upgrade the existing ESXi hosts in the SDDC to use a newer
* version of bundled VMware software supported by the Oracle Cloud VMware Solution, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `vmwareSoftwareVersion` with that new version.
* 
    */
  "vmwareSoftwareVersion": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that
   * contains the SDDC.
   *
   */
  "compartmentId": string;
  /**
   * The number of ESXi hosts in the SDDC. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "esxiHostsCount": number;
  /**
   * HCX Fully Qualified Domain Name
   */
  "hcxFqdn"?: string;
  /**
   * Indicates whether HCX is enabled.
   */
  "isHcxEnabled"?: boolean;
  /**
    * FQDN for vCenter
* <p>
Example: `vcenter-my-sddc.sddc.us-phoenix-1.oraclecloud.com`
* 
    */
  "vcenterFqdn"?: string;
  /**
    * FQDN for NSX Manager
* <p>
Example: `nsx-my-sddc.sddc.us-phoenix-1.oraclecloud.com`
* 
    */
  "nsxManagerFqdn"?: string;
  /**
    * The date and time the SDDC was created, in the format defined by
* [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The date and time the SDDC was updated, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the SDDC.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * Indicates whether shielded instance is enabled at the SDDC level.
   *
   */
  "isShieldedInstanceEnabled"?: boolean;
  /**
   * The initial compute shape of the SDDC's ESXi hosts.
   * {@link #listSupportedHostShapes(ListSupportedHostShapesRequest) listSupportedHostShapes}.
   *
   */
  "initialHostShapeName": string;
  /**
   * The initial OCPU count of the SDDC's ESXi hosts.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "initialHostOcpuCount"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
}

export namespace SddcSummary {
  export function getJsonObj(obj: SddcSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SddcSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
