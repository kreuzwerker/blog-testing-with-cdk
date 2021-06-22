import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class BucketStack extends cdk.Stack {
  constructor(environment: string, scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'Bucket', {
      bucketName: `my-bucket-${environment}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    cdk.Tags.of(bucket).add('abc', '123')
    cdk.Tags.of(bucket).add('environment', environment)
    //cdk.Tags.of(bucket).add('xyz', '123')

    new s3.Bucket(this, 'OtherBucket');
  }
}
