import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { BucketStack } from '../lib/bucket-stack';

describe('Environment name applied', () => {
   
   test('Bucket name contains environment name', () => {
      const app = new cdk.App();
      const stack = new BucketStack('foo', app, 'MyTestStack');

      expect(stack).toHaveResource('AWS::S3::Bucket', {
         BucketName: 'my-bucket-foo'
      });
   });

   test('Environment name applied as tag', () => {
      const app = new cdk.App();
      const stack = new BucketStack('foo', app, 'MyTestStack');

      expect(stack).toHaveResource('AWS::S3::Bucket', {
         Tags: [
            {
               Key: 'environment',
               Value: 'foo'
            }
         ]
      });
   });
});

