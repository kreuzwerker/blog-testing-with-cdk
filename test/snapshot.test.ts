import { SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
 
import { BucketStack } from '../lib/bucket-stack';
 
test('bucket stack', () => {
 const app = new cdk.App();
 const stack = new BucketStack('foo', app, 'TestBucketStack');
 expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
