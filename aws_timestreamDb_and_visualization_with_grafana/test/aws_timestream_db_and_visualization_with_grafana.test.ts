import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AwsTimestreamDbAndVisualizationWithGrafana from '../lib/aws_timestream_db_and_visualization_with_grafana-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AwsTimestreamDbAndVisualizationWithGrafana.AwsTimestreamDbAndVisualizationWithGrafanaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
