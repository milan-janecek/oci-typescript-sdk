/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For information about monitoring, see [Monitoring Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm).

 * OpenAPI spec version: 20180401
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AggregatedDatapoint from "./aggregated-datapoint";
export import AggregatedDatapoint = AggregatedDatapoint.AggregatedDatapoint;
import * as Alarm from "./alarm";
export import Alarm = Alarm.Alarm;
import * as AlarmHistoryCollection from "./alarm-history-collection";
export import AlarmHistoryCollection = AlarmHistoryCollection.AlarmHistoryCollection;
import * as AlarmHistoryEntry from "./alarm-history-entry";
export import AlarmHistoryEntry = AlarmHistoryEntry.AlarmHistoryEntry;
import * as AlarmStatusSummary from "./alarm-status-summary";
export import AlarmStatusSummary = AlarmStatusSummary.AlarmStatusSummary;
import * as AlarmSummary from "./alarm-summary";
export import AlarmSummary = AlarmSummary.AlarmSummary;
import * as ChangeAlarmCompartmentDetails from "./change-alarm-compartment-details";
export import ChangeAlarmCompartmentDetails = ChangeAlarmCompartmentDetails.ChangeAlarmCompartmentDetails;
import * as CreateAlarmDetails from "./create-alarm-details";
export import CreateAlarmDetails = CreateAlarmDetails.CreateAlarmDetails;
import * as Datapoint from "./datapoint";
export import Datapoint = Datapoint.Datapoint;
import * as FailedMetricRecord from "./failed-metric-record";
export import FailedMetricRecord = FailedMetricRecord.FailedMetricRecord;
import * as ListMetricsDetails from "./list-metrics-details";
export import ListMetricsDetails = ListMetricsDetails.ListMetricsDetails;
import * as Metric from "./metric";
export import Metric = Metric.Metric;
import * as MetricData from "./metric-data";
export import MetricData = MetricData.MetricData;
import * as MetricDataDetails from "./metric-data-details";
export import MetricDataDetails = MetricDataDetails.MetricDataDetails;
import * as PostMetricDataDetails from "./post-metric-data-details";
export import PostMetricDataDetails = PostMetricDataDetails.PostMetricDataDetails;
import * as PostMetricDataResponseDetails from "./post-metric-data-response-details";
export import PostMetricDataResponseDetails = PostMetricDataResponseDetails.PostMetricDataResponseDetails;
import * as SummarizeMetricsDataDetails from "./summarize-metrics-data-details";
export import SummarizeMetricsDataDetails = SummarizeMetricsDataDetails.SummarizeMetricsDataDetails;
import * as Suppression from "./suppression";
export import Suppression = Suppression.Suppression;
import * as UpdateAlarmDetails from "./update-alarm-details";
export import UpdateAlarmDetails = UpdateAlarmDetails.UpdateAlarmDetails;
