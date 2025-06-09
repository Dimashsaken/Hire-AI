# Backend Functions (AWS Lambda)

This directory contains the serverless functions for the Hire AI project, intended for deployment to AWS Lambda.

## Purpose

While Supabase handles our primary database and authentication needs, this directory is for custom business logic that runs on the server. Each sub-directory in this folder represents an individual Lambda function.

Use these functions for tasks like:

- **AI-powered operations**:
  - Generating job descriptions from a title and keywords.
  - Scoring candidate resumes against a vacancy.
  - Analyzing and transcribing video/audio from auto-interviews.
- **Third-party integrations**:
  - Processing incoming candidates from external sources via webhooks (e.g., from job boards).
  - Sending notifications through services like WhatsApp or Twilio.
- **Complex, long-running jobs**:
  - Generating reports.
  - Data processing tasks that would be too slow or intensive for a client-side application.

## Getting Started

1.  **Install the Serverless Framework**: `npm install -g serverless`
2.  **Configure AWS Credentials**: Make sure your AWS credentials are set up correctly on your machine.
3.  **Develop a Function**:
    - Create a new directory (e.g., `generate-description`).
    - Inside, add your function handler (e.g., `handler.js`).
    - Add a `serverless.yml` file to define the function, its trigger (e.g., API Gateway), and any required resources.
4.  **Deploy**:
    - Navigate to the function's directory: `cd generate-description`
    - Deploy the function: `serverless deploy`

Each function is a self-contained unit with its own dependencies and configuration, making them easy to manage and deploy independently.
