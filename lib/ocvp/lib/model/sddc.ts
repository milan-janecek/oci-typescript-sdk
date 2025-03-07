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
* An [Oracle Cloud VMware Solution](https://docs.cloud.oracle.com/iaas/Content/VMware/Concepts/ocvsoverview.htm) software-defined data center (SDDC) contains the resources required for a
* functional VMware environment. Instances in an SDDC
* (see {@link EsxiHost}) run in a virtual cloud network (VCN)
* and are preconfigured with VMware and storage. Use the vCenter utility to manage
* and deploy VMware virtual machines (VMs) in the SDDC.
* <p>
The SDDC uses a single management subnet for provisioning the SDDC. It also uses a
* set of VLANs for various components of the VMware environment (vSphere, vMotion,
* vSAN, and so on). See the Core Services API for information about VCN subnets and VLANs.
* 
*/
export interface Sddc {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the SDDC.
   *
   */
  "id": string;
  /**
    * The availability domain the ESXi hosts are running in. For Multi-AD SDDC, it is `multi-AD`.
* <p>
Example: `Uocm:PHX-AD-1`, `multi-AD`
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
    * A prefix used in the name of each ESXi host and Compute instance in the SDDC.
* If this isn't set, the SDDC's `displayName` is used as the prefix.
* <p>
For example, if the value is `MySDDC`, the ESXi hosts are named `MySDDC-1`,
* `MySDDC-2`, and so on.
* 
    */
  "instanceDisplayNamePrefix"?: string;
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
   * The billing option selected during SDDC creation.
   * {@link #listSupportedSkus(ListSupportedSkusRequest) listSupportedSkus}.
   *
   */
  "initialSku"?: model.Sku;
  /**
    * The FQDN for vCenter.
* <p>
Example: `vcenter-my-sddc.sddc.us-phoenix-1.oraclecloud.com`
* 
    */
  "vcenterFqdn": string;
  /**
    * The FQDN for NSX Manager.
* <p>
Example: `nsx-my-sddc.sddc.us-phoenix-1.oraclecloud.com`
* 
    */
  "nsxManagerFqdn": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the `PrivateIp` object that is
   * the virtual IP (VIP) for vCenter. For information about `PrivateIp` objects, see the
   * Core Services API.
   *
   */
  "vcenterPrivateIpId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the `PrivateIp` object that is
   * the virtual IP (VIP) for NSX Manager. For information about `PrivateIp` objects, see the
   * Core Services API.
   *
   */
  "nsxManagerPrivateIpId": string;
  /**
   * The SDDC includes an administrator username and initial password for vCenter. Make sure
   * to change this initial vCenter password to a different value.
   *
   */
  "vcenterInitialPassword"?: string;
  /**
   * The SDDC includes an administrator username and initial password for NSX Manager. Make sure
   * to change this initial NSX Manager password to a different value.
   *
   */
  "nsxManagerInitialPassword"?: string;
  /**
   * The SDDC includes an administrator username and initial password for vCenter. You can
   * change this initial username to a different value in vCenter.
   *
   */
  "vcenterUsername"?: string;
  /**
   * The SDDC includes an administrator username and initial password for NSX Manager. You
   * can change this initial username to a different value in NSX Manager.
   *
   */
  "nsxManagerUsername"?: string;
  /**
    * One or more public SSH keys to be included in the `~/.ssh/authorized_keys` file for
* the default user on each ESXi host. Use a newline character to separate multiple keys.
* The SSH keys must be in the format required for the `authorized_keys` file.
* <p>
This attribute is not guaranteed to reflect the public SSH keys
* currently installed on the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the public SSH keys that Oracle
* Cloud VMware Solution will install on any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you upgrade the existing ESXi hosts in the SDDC to use different
* SSH keys, you should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update
* the SDDC's `sshAuthorizedKeys` with the new public keys.
* 
    */
  "sshAuthorizedKeys": string;
  /**
   * The CIDR block for the IP addresses that VMware VMs in the SDDC use to run application
   * workloads.
   *
   */
  "workloadNetworkCidr"?: string;
  /**
   * The VMware NSX overlay workload segment to host your application. Connect to workload
   * portgroup in vCenter to access this overlay segment.
   *
   */
  "nsxOverlaySegmentName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the `PrivateIp` object that is
   * the virtual IP (VIP) for the NSX Edge Uplink. Use this OCID as the route target for
   * route table rules when setting up connectivity between the SDDC and other networks.
   * For information about `PrivateIp` objects, see the Core Services API.
   *
   */
  "nsxEdgeUplinkIpId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the management subnet used
   * to provision the SDDC.
   *
   */
  "provisioningSubnetId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the vSphere component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the vSphere VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the vSphere VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the vSphere component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `vsphereVlanId` with that new VLAN's OCID.
* 
    */
  "vsphereVlanId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the vMotion component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the vMotion VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the vMotion VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the vMotion component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `vmotionVlanId` with that new VLAN's OCID.
* 
    */
  "vmotionVlanId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the vSAN component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the vSAN VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the vSAN VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the vSAN component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `vsanVlanId` with that new VLAN's OCID.
* 
    */
  "vsanVlanId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the NSX VTEP component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the NSX VTEP VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the NSX VTEP VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the NSX VTEP component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `nsxVTepVlanId` with that new VLAN's OCID.
* 
    */
  "nsxVTepVlanId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the NSX Edge VTEP component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the NSX Edge VTEP VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the NSX Edge VTEP VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the NSX Edge VTEP component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `nsxEdgeVTepVlanId` with that new VLAN's OCID.
* 
    */
  "nsxEdgeVTepVlanId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the NSX Edge Uplink 1 component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the NSX Edge Uplink 1 VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the NSX Edge Uplink 1 VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the NSX Edge Uplink 1 component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `nsxEdgeUplink1VlanId` with that new VLAN's OCID.
* 
    */
  "nsxEdgeUplink1VlanId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the NSX Edge Uplink 2 component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the NSX Edge Uplink 2 VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the NSX Edge Uplink 2 VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the NSX Edge Uplink 2 component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `nsxEdgeUplink2VlanId` with that new VLAN's OCID.
* 
    */
  "nsxEdgeUplink2VlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
   * for the vSphere Replication component of the VMware environment.
   *
   */
  "replicationVlanId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
   * for the Provisioning component of the VMware environment.
   *
   */
  "provisioningVlanId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the `PrivateIp` object that is
   * the virtual IP (VIP) for HCX Manager. For information about `PrivateIp` objects, see the
   * Core Services API.
   *
   */
  "hcxPrivateIpId"?: string;
  /**
    * The FQDN for HCX Manager.
* <p>
Example: `hcx-my-sddc.sddc.us-phoenix-1.oraclecloud.com`
* 
    */
  "hcxFqdn"?: string;
  /**
   * The SDDC includes an administrator username and initial password for HCX Manager. Make sure
   * to change this initial HCX Manager password to a different value.
   *
   */
  "hcxInitialPassword"?: string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the HCX component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the HCX VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the HCX VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the HCX component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* `hcxVlanId` with that new VLAN's OCID.
* 
    */
  "hcxVlanId"?: string;
  /**
   * Indicates whether HCX is enabled for this SDDC.
   */
  "isHcxEnabled"?: boolean;
  /**
   * The activation keys to use on the on-premises HCX Enterprise appliances you site pair with HCX Manager in your VMware Solution.
   * The number of keys provided depends on the HCX license type. HCX Advanced provides 3 activation keys.
   * HCX Enterprise provides 10 activation keys.
   *
   */
  "hcxOnPremKey"?: string;
  /**
   * Indicates whether HCX Enterprise is enabled for this SDDC.
   */
  "isHcxEnterpriseEnabled"?: boolean;
  /**
   * Indicates whether SDDC is pending downgrade from HCX Enterprise to HCX Advanced.
   */
  "isHcxPendingDowngrade"?: boolean;
  /**
   * The activation licenses to use on the on-premises HCX Enterprise appliance you site pair with HCX Manager in your VMware Solution.
   *
   */
  "hcxOnPremLicenses"?: Array<model.HcxLicenseSummary>;
  /**
    * The date and time current HCX Enterprise billing cycle ends, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeHcxBillingCycleEnd"?: Date;
  /**
    * The date and time the SDDC's HCX on-premise license status was updated, in the format defined by
* [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeHcxLicenseStatusUpdated"?: Date;
  /**
    * The date and time the SDDC was created, in the format defined by
* [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
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
   * Indicates whether shielded instance is enabled at the SDDC level.
   *
   */
  "isShieldedInstanceEnabled"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Capacity Reservation.
   *
   */
  "capacityReservationId"?: string;
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

export namespace Sddc {
  export function getJsonObj(obj: Sddc): object {
    const jsonObj = {
      ...obj,
      ...{
        "hcxOnPremLicenses": obj.hcxOnPremLicenses
          ? obj.hcxOnPremLicenses.map(item => {
              return model.HcxLicenseSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Sddc): object {
    const jsonObj = {
      ...obj,
      ...{
        "hcxOnPremLicenses": obj.hcxOnPremLicenses
          ? obj.hcxOnPremLicenses.map(item => {
              return model.HcxLicenseSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
