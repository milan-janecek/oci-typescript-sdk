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

import * as ApplyJobPlanResolution from "./apply-job-plan-resolution";
export import ApplyJobPlanResolution = ApplyJobPlanResolution.ApplyJobPlanResolution;
import * as CancellationDetails from "./cancellation-details";
export import CancellationDetails = CancellationDetails.CancellationDetails;
import * as ChangeConfigurationSourceProviderCompartmentDetails from "./change-configuration-source-provider-compartment-details";
export import ChangeConfigurationSourceProviderCompartmentDetails = ChangeConfigurationSourceProviderCompartmentDetails.ChangeConfigurationSourceProviderCompartmentDetails;
import * as ChangePrivateEndpointCompartmentDetails from "./change-private-endpoint-compartment-details";
export import ChangePrivateEndpointCompartmentDetails = ChangePrivateEndpointCompartmentDetails.ChangePrivateEndpointCompartmentDetails;
import * as ChangeStackCompartmentDetails from "./change-stack-compartment-details";
export import ChangeStackCompartmentDetails = ChangeStackCompartmentDetails.ChangeStackCompartmentDetails;
import * as ChangeTemplateCompartmentDetails from "./change-template-compartment-details";
export import ChangeTemplateCompartmentDetails = ChangeTemplateCompartmentDetails.ChangeTemplateCompartmentDetails;
import * as ConfigSource from "./config-source";
export import ConfigSource = ConfigSource.ConfigSource;
import * as ConfigSourceRecord from "./config-source-record";
export import ConfigSourceRecord = ConfigSourceRecord.ConfigSourceRecord;
import * as ConfigurationSourceProvider from "./configuration-source-provider";
export import ConfigurationSourceProvider = ConfigurationSourceProvider.ConfigurationSourceProvider;
import * as ConfigurationSourceProviderCollection from "./configuration-source-provider-collection";
export import ConfigurationSourceProviderCollection = ConfigurationSourceProviderCollection.ConfigurationSourceProviderCollection;
import * as ConfigurationSourceProviderSummary from "./configuration-source-provider-summary";
export import ConfigurationSourceProviderSummary = ConfigurationSourceProviderSummary.ConfigurationSourceProviderSummary;
import * as CreateConfigSourceDetails from "./create-config-source-details";
export import CreateConfigSourceDetails = CreateConfigSourceDetails.CreateConfigSourceDetails;
import * as CreateConfigurationSourceProviderDetails from "./create-configuration-source-provider-details";
export import CreateConfigurationSourceProviderDetails = CreateConfigurationSourceProviderDetails.CreateConfigurationSourceProviderDetails;
import * as CreateJobDetails from "./create-job-details";
export import CreateJobDetails = CreateJobDetails.CreateJobDetails;
import * as CreateJobOperationDetails from "./create-job-operation-details";
export import CreateJobOperationDetails = CreateJobOperationDetails.CreateJobOperationDetails;
import * as CreatePrivateEndpointDetails from "./create-private-endpoint-details";
export import CreatePrivateEndpointDetails = CreatePrivateEndpointDetails.CreatePrivateEndpointDetails;
import * as CreateStackDetails from "./create-stack-details";
export import CreateStackDetails = CreateStackDetails.CreateStackDetails;
import * as CreateTemplateConfigSourceDetails from "./create-template-config-source-details";
export import CreateTemplateConfigSourceDetails = CreateTemplateConfigSourceDetails.CreateTemplateConfigSourceDetails;
import * as CreateTemplateDetails from "./create-template-details";
export import CreateTemplateDetails = CreateTemplateDetails.CreateTemplateDetails;
import * as CustomTerraformProvider from "./custom-terraform-provider";
export import CustomTerraformProvider = CustomTerraformProvider.CustomTerraformProvider;
import * as DetectStackDriftDetails from "./detect-stack-drift-details";
export import DetectStackDriftDetails = DetectStackDriftDetails.DetectStackDriftDetails;
import * as FailureDetails from "./failure-details";
export import FailureDetails = FailureDetails.FailureDetails;
import * as Job from "./job";
export import Job = Job.Job;
import * as JobOperationDetails from "./job-operation-details";
export import JobOperationDetails = JobOperationDetails.JobOperationDetails;
import * as JobOperationDetailsSummary from "./job-operation-details-summary";
export import JobOperationDetailsSummary = JobOperationDetailsSummary.JobOperationDetailsSummary;
import * as JobSummary from "./job-summary";
export import JobSummary = JobSummary.JobSummary;
import * as LogEntry from "./log-entry";
export import LogEntry = LogEntry.LogEntry;
import * as PrivateEndpoint from "./private-endpoint";
export import PrivateEndpoint = PrivateEndpoint.PrivateEndpoint;
import * as PrivateEndpointCollection from "./private-endpoint-collection";
export import PrivateEndpointCollection = PrivateEndpointCollection.PrivateEndpointCollection;
import * as PrivateEndpointSummary from "./private-endpoint-summary";
export import PrivateEndpointSummary = PrivateEndpointSummary.PrivateEndpointSummary;
import * as PrivateServerConfigDetails from "./private-server-config-details";
export import PrivateServerConfigDetails = PrivateServerConfigDetails.PrivateServerConfigDetails;
import * as ReachableIp from "./reachable-ip";
export import ReachableIp = ReachableIp.ReachableIp;
import * as ResourceDiscoveryServiceCollection from "./resource-discovery-service-collection";
export import ResourceDiscoveryServiceCollection = ResourceDiscoveryServiceCollection.ResourceDiscoveryServiceCollection;
import * as ResourceDiscoveryServiceSummary from "./resource-discovery-service-summary";
export import ResourceDiscoveryServiceSummary = ResourceDiscoveryServiceSummary.ResourceDiscoveryServiceSummary;
import * as Stack from "./stack";
export import Stack = Stack.Stack;
import * as StackResourceDriftCollection from "./stack-resource-drift-collection";
export import StackResourceDriftCollection = StackResourceDriftCollection.StackResourceDriftCollection;
import * as StackResourceDriftSummary from "./stack-resource-drift-summary";
export import StackResourceDriftSummary = StackResourceDriftSummary.StackResourceDriftSummary;
import * as StackSummary from "./stack-summary";
export import StackSummary = StackSummary.StackSummary;
import * as Template from "./template";
export import Template = Template.Template;
import * as TemplateCategorySummary from "./template-category-summary";
export import TemplateCategorySummary = TemplateCategorySummary.TemplateCategorySummary;
import * as TemplateCategorySummaryCollection from "./template-category-summary-collection";
export import TemplateCategorySummaryCollection = TemplateCategorySummaryCollection.TemplateCategorySummaryCollection;
import * as TemplateConfigSource from "./template-config-source";
export import TemplateConfigSource = TemplateConfigSource.TemplateConfigSource;
import * as TemplateSummary from "./template-summary";
export import TemplateSummary = TemplateSummary.TemplateSummary;
import * as TemplateSummaryCollection from "./template-summary-collection";
export import TemplateSummaryCollection = TemplateSummaryCollection.TemplateSummaryCollection;
import * as TerraformAdvancedOptions from "./terraform-advanced-options";
export import TerraformAdvancedOptions = TerraformAdvancedOptions.TerraformAdvancedOptions;
import * as TerraformVersionCollection from "./terraform-version-collection";
export import TerraformVersionCollection = TerraformVersionCollection.TerraformVersionCollection;
import * as TerraformVersionSummary from "./terraform-version-summary";
export import TerraformVersionSummary = TerraformVersionSummary.TerraformVersionSummary;
import * as UpdateConfigSourceDetails from "./update-config-source-details";
export import UpdateConfigSourceDetails = UpdateConfigSourceDetails.UpdateConfigSourceDetails;
import * as UpdateConfigurationSourceProviderDetails from "./update-configuration-source-provider-details";
export import UpdateConfigurationSourceProviderDetails = UpdateConfigurationSourceProviderDetails.UpdateConfigurationSourceProviderDetails;
import * as UpdateJobDetails from "./update-job-details";
export import UpdateJobDetails = UpdateJobDetails.UpdateJobDetails;
import * as UpdatePrivateEndpointDetails from "./update-private-endpoint-details";
export import UpdatePrivateEndpointDetails = UpdatePrivateEndpointDetails.UpdatePrivateEndpointDetails;
import * as UpdateStackDetails from "./update-stack-details";
export import UpdateStackDetails = UpdateStackDetails.UpdateStackDetails;
import * as UpdateTemplateConfigSourceDetails from "./update-template-config-source-details";
export import UpdateTemplateConfigSourceDetails = UpdateTemplateConfigSourceDetails.UpdateTemplateConfigSourceDetails;
import * as UpdateTemplateDetails from "./update-template-details";
export import UpdateTemplateDetails = UpdateTemplateDetails.UpdateTemplateDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as ApplyJobOperationDetails from "./apply-job-operation-details";
export import ApplyJobOperationDetails = ApplyJobOperationDetails.ApplyJobOperationDetails;
import * as ApplyJobOperationDetailsSummary from "./apply-job-operation-details-summary";
export import ApplyJobOperationDetailsSummary = ApplyJobOperationDetailsSummary.ApplyJobOperationDetailsSummary;
import * as CompartmentConfigSource from "./compartment-config-source";
export import CompartmentConfigSource = CompartmentConfigSource.CompartmentConfigSource;
import * as CreateApplyJobOperationDetails from "./create-apply-job-operation-details";
export import CreateApplyJobOperationDetails = CreateApplyJobOperationDetails.CreateApplyJobOperationDetails;
import * as CreateCompartmentConfigSourceDetails from "./create-compartment-config-source-details";
export import CreateCompartmentConfigSourceDetails = CreateCompartmentConfigSourceDetails.CreateCompartmentConfigSourceDetails;
import * as CreateDestroyJobOperationDetails from "./create-destroy-job-operation-details";
export import CreateDestroyJobOperationDetails = CreateDestroyJobOperationDetails.CreateDestroyJobOperationDetails;
import * as CreateGitConfigSourceDetails from "./create-git-config-source-details";
export import CreateGitConfigSourceDetails = CreateGitConfigSourceDetails.CreateGitConfigSourceDetails;
import * as CreateGithubAccessTokenConfigurationSourceProviderDetails from "./create-github-access-token-configuration-source-provider-details";
export import CreateGithubAccessTokenConfigurationSourceProviderDetails = CreateGithubAccessTokenConfigurationSourceProviderDetails.CreateGithubAccessTokenConfigurationSourceProviderDetails;
import * as CreateGitlabAccessTokenConfigurationSourceProviderDetails from "./create-gitlab-access-token-configuration-source-provider-details";
export import CreateGitlabAccessTokenConfigurationSourceProviderDetails = CreateGitlabAccessTokenConfigurationSourceProviderDetails.CreateGitlabAccessTokenConfigurationSourceProviderDetails;
import * as CreateImportTfStateJobOperationDetails from "./create-import-tf-state-job-operation-details";
export import CreateImportTfStateJobOperationDetails = CreateImportTfStateJobOperationDetails.CreateImportTfStateJobOperationDetails;
import * as CreateObjectStorageConfigSourceDetails from "./create-object-storage-config-source-details";
export import CreateObjectStorageConfigSourceDetails = CreateObjectStorageConfigSourceDetails.CreateObjectStorageConfigSourceDetails;
import * as CreatePlanJobOperationDetails from "./create-plan-job-operation-details";
export import CreatePlanJobOperationDetails = CreatePlanJobOperationDetails.CreatePlanJobOperationDetails;
import * as CreateStackTemplateConfigSourceDetails from "./create-stack-template-config-source-details";
export import CreateStackTemplateConfigSourceDetails = CreateStackTemplateConfigSourceDetails.CreateStackTemplateConfigSourceDetails;
import * as CreateTemplateZipUploadConfigSourceDetails from "./create-template-zip-upload-config-source-details";
export import CreateTemplateZipUploadConfigSourceDetails = CreateTemplateZipUploadConfigSourceDetails.CreateTemplateZipUploadConfigSourceDetails;
import * as CreateZipUploadConfigSourceDetails from "./create-zip-upload-config-source-details";
export import CreateZipUploadConfigSourceDetails = CreateZipUploadConfigSourceDetails.CreateZipUploadConfigSourceDetails;
import * as DestroyJobOperationDetails from "./destroy-job-operation-details";
export import DestroyJobOperationDetails = DestroyJobOperationDetails.DestroyJobOperationDetails;
import * as DestroyJobOperationDetailsSummary from "./destroy-job-operation-details-summary";
export import DestroyJobOperationDetailsSummary = DestroyJobOperationDetailsSummary.DestroyJobOperationDetailsSummary;
import * as GitConfigSource from "./git-config-source";
export import GitConfigSource = GitConfigSource.GitConfigSource;
import * as GitConfigSourceRecord from "./git-config-source-record";
export import GitConfigSourceRecord = GitConfigSourceRecord.GitConfigSourceRecord;
import * as GithubAccessTokenConfigurationSourceProvider from "./github-access-token-configuration-source-provider";
export import GithubAccessTokenConfigurationSourceProvider = GithubAccessTokenConfigurationSourceProvider.GithubAccessTokenConfigurationSourceProvider;
import * as GithubAccessTokenConfigurationSourceProviderSummary from "./github-access-token-configuration-source-provider-summary";
export import GithubAccessTokenConfigurationSourceProviderSummary = GithubAccessTokenConfigurationSourceProviderSummary.GithubAccessTokenConfigurationSourceProviderSummary;
import * as GitlabAccessTokenConfigurationSourceProvider from "./gitlab-access-token-configuration-source-provider";
export import GitlabAccessTokenConfigurationSourceProvider = GitlabAccessTokenConfigurationSourceProvider.GitlabAccessTokenConfigurationSourceProvider;
import * as GitlabAccessTokenConfigurationSourceProviderSummary from "./gitlab-access-token-configuration-source-provider-summary";
export import GitlabAccessTokenConfigurationSourceProviderSummary = GitlabAccessTokenConfigurationSourceProviderSummary.GitlabAccessTokenConfigurationSourceProviderSummary;
import * as ImportTfStateJobOperationDetails from "./import-tf-state-job-operation-details";
export import ImportTfStateJobOperationDetails = ImportTfStateJobOperationDetails.ImportTfStateJobOperationDetails;
import * as ImportTfStateJobOperationDetailsSummary from "./import-tf-state-job-operation-details-summary";
export import ImportTfStateJobOperationDetailsSummary = ImportTfStateJobOperationDetailsSummary.ImportTfStateJobOperationDetailsSummary;
import * as ObjectStorageConfigSource from "./object-storage-config-source";
export import ObjectStorageConfigSource = ObjectStorageConfigSource.ObjectStorageConfigSource;
import * as ObjectStorageConfigSourceRecord from "./object-storage-config-source-record";
export import ObjectStorageConfigSourceRecord = ObjectStorageConfigSourceRecord.ObjectStorageConfigSourceRecord;
import * as PlanJobOperationDetails from "./plan-job-operation-details";
export import PlanJobOperationDetails = PlanJobOperationDetails.PlanJobOperationDetails;
import * as PlanJobOperationDetailsSummary from "./plan-job-operation-details-summary";
export import PlanJobOperationDetailsSummary = PlanJobOperationDetailsSummary.PlanJobOperationDetailsSummary;
import * as TemplateZipUploadConfigSource from "./template-zip-upload-config-source";
export import TemplateZipUploadConfigSource = TemplateZipUploadConfigSource.TemplateZipUploadConfigSource;
import * as UpdateGitConfigSourceDetails from "./update-git-config-source-details";
export import UpdateGitConfigSourceDetails = UpdateGitConfigSourceDetails.UpdateGitConfigSourceDetails;
import * as UpdateGithubAccessTokenConfigurationSourceProviderDetails from "./update-github-access-token-configuration-source-provider-details";
export import UpdateGithubAccessTokenConfigurationSourceProviderDetails = UpdateGithubAccessTokenConfigurationSourceProviderDetails.UpdateGithubAccessTokenConfigurationSourceProviderDetails;
import * as UpdateGitlabAccessTokenConfigurationSourceProviderDetails from "./update-gitlab-access-token-configuration-source-provider-details";
export import UpdateGitlabAccessTokenConfigurationSourceProviderDetails = UpdateGitlabAccessTokenConfigurationSourceProviderDetails.UpdateGitlabAccessTokenConfigurationSourceProviderDetails;
import * as UpdateObjectStorageConfigSourceDetails from "./update-object-storage-config-source-details";
export import UpdateObjectStorageConfigSourceDetails = UpdateObjectStorageConfigSourceDetails.UpdateObjectStorageConfigSourceDetails;
import * as UpdateTemplateZipUploadConfigSourceDetails from "./update-template-zip-upload-config-source-details";
export import UpdateTemplateZipUploadConfigSourceDetails = UpdateTemplateZipUploadConfigSourceDetails.UpdateTemplateZipUploadConfigSourceDetails;
import * as UpdateZipUploadConfigSourceDetails from "./update-zip-upload-config-source-details";
export import UpdateZipUploadConfigSourceDetails = UpdateZipUploadConfigSourceDetails.UpdateZipUploadConfigSourceDetails;
import * as ZipUploadConfigSource from "./zip-upload-config-source";
export import ZipUploadConfigSource = ZipUploadConfigSource.ZipUploadConfigSource;
import * as ZipUploadConfigSourceRecord from "./zip-upload-config-source-record";
export import ZipUploadConfigSourceRecord = ZipUploadConfigSourceRecord.ZipUploadConfigSourceRecord;
