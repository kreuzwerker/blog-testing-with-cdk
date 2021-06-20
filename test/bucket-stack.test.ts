import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { BucketStack } from '../lib/bucket-stack';

test('Bucket name', () => {
   const app = new cdk.App();
   const stack = new BucketStack('foo', app, 'MyTestStack');

   expect(stack).toHaveResource('AWS::S3::Bucket', {
      BucketName: 'my-bucket-foo'
   });
});
