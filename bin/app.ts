#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BucketStack } from '../lib/bucket-stack';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'eu-central-1' };

const app = new cdk.App();

const stackProps = {
    env,
    tags: {
      environment: 'dev'
    },
  };

new BucketStack(app, 'BucketStack', stackProps);