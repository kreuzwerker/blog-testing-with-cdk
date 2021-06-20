import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { BucketStack } from '../lib/bucket-stack';

test('Stack contains bucket', () => {
   const app = new cdk.App();
   const stack = new BucketStack(app, 'MyTestStack');

   expect(stack).toHaveResource('AWS::S3::Bucket');
});
