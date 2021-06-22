import { expect as expectCDK, haveResourceLike, arrayWith, ResourcePart } from '@aws-cdk/assert'
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

      /* expect(stack).toHaveResourceLike('AWS::S3::Bucket', {
         Tags: [
            {
               Key: 'environment',
               Value: 'foo'
            }
         ]
      }); */

      expectCDK(stack).to(haveResourceLike('AWS::S3::Bucket', {
         Tags: arrayWith(
            {
               Key: 'environment',
               Value: 'foo'
            }
         )
      }));

   });
});

test('Retention settings', () => {
   const app = new cdk.App();
   const stack = new BucketStack('foo', app, 'MyTestStack');

   expect(stack).toHaveResource('AWS::S3::Bucket', {
      UpdateReplacePolicy: 'Delete',
      DeletionPolicy: 'Delete',
   }, ResourcePart.CompleteDefinition);
});

