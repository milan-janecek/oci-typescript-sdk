/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of the Exadata Cloud@Customer infrastructure. Applies to Exadata Cloud@Customer instances only.
 * See {@link #cloudExadataInfrastructureSummary(CloudExadataInfrastructureSummaryRequest) cloudExadataInfrastructureSummary} for details of the cloud Exadata infrastructure resource used by Exadata Cloud Service instances.
 *
 */
export interface ExadataInfrastructureSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The current lifecycle state of the Exadata infrastructure.
   */
  "lifecycleState": ExadataInfrastructureSummary.LifecycleState;
  /**
   * The user-friendly name for the Exadata Cloud@Customer infrastructure. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The shape of the Exadata infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance.
   *
   */
  "shape": string;
  /**
   * The time zone of the Exadata infrastructure. For details, see [Exadata Infrastructure Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  /**
   * The number of enabled CPU cores. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpusEnabled"?: number;
  /**
   * The total number of CPU cores available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxCpuCount"?: number;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The total memory available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxMemoryInGBs"?: number;
  /**
   * The local node storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The total local node storage available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDbNodeStorageInGBs"?: number;
  /**
   * Size, in terabytes, of the DATA disk group.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * The total available DATA disk group size. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDataStorageInTBs"?: number;
  /**
   * The IP address for the first control plane server.
   */
  "cloudControlPlaneServer1"?: string;
  /**
   * The IP address for the second control plane server.
   */
  "cloudControlPlaneServer2"?: string;
  /**
   * The netmask for the control plane network.
   */
  "netmask"?: string;
  /**
   * The gateway for the control plane network.
   */
  "gateway"?: string;
  /**
   * The CIDR block for the Exadata administration network.
   */
  "adminNetworkCIDR"?: string;
  /**
   * The CIDR block for the Exadata InfiniBand interconnect.
   */
  "infiniBandNetworkCIDR"?: string;
  /**
   * The corporate network proxy for access to the control plane network.
   */
  "corporateProxy"?: string;
  /**
   * The list of DNS server IP addresses. Maximum of 3 allowed.
   */
  "dnsServer"?: Array<string>;
  /**
   * The list of NTP server IP addresses. Maximum of 3 allowed.
   */
  "ntpServer"?: Array<string>;
  /**
   * The date and time the Exadata infrastructure was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The CSI Number of the Exadata infrastructure.
   */
  "csiNumber"?: string;
  /**
   * The list of contacts for the Exadata infrastructure.
   */
  "contacts"?: Array<model.ExadataInfrastructureContact>;
  /**
   * A field to capture \u2018Maintenance SLO Status\u2019 for the Exadata infrastructure with values \u2018OK\u2019, \u2018DEGRADED\u2019. Default is \u2018OK\u2019 when the infrastructure is provisioned.
   */
  "maintenanceSLOStatus"?: ExadataInfrastructureSummary.MaintenanceSLOStatus;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance run.
   */
  "lastMaintenanceRunId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the next maintenance run.
   */
  "nextMaintenanceRunId"?: string;
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

export namespace ExadataInfrastructureSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    RequiresActivation = "REQUIRES_ACTIVATION",
    Activating = "ACTIVATING",
    Active = "ACTIVE",
    ActivationFailed = "ACTIVATION_FAILED",
    Failed = "FAILED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Disconnected = "DISCONNECTED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceSLOStatus {
    Ok = "OK",
    Degraded = "DEGRADED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExadataInfrastructureSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "contacts": obj.contacts
          ? obj.contacts.map(item => {
              return model.ExadataInfrastructureContact.getJsonObj(item);
            })
          : undefined,

        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined
      }
    };

    return jsonObj;
  }
}
