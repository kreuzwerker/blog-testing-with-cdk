import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { BucketStack } from '../lib/bucket-stack';
import { MatchStyle } from '@aws-cdk/assert';

test('Test template', () => {
   const app = new cdk.App();
   const stack = new BucketStack('foo', app, 'MyTestStack');
   expect(stack).toMatchTemplate({
      "Resources": {
         "Bucket83908E77": {
            "Type": "AWS::S3::Bucket",
            "Properties": {
               "BucketName": "my-bucket-foo",
               "Tags": [
                  {
                     "Key": "abc",
                     "Value": "123"
                  },
                  {
                     "Key": "environment",
                     "Value": "foo"
                  }
               ]
            },
            "UpdateReplacePolicy": "Delete",
            "DeletionPolicy": "Delete"
         }
      }
   }, MatchStyle.SUPERSET)
});


