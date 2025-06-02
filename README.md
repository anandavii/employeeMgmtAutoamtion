# Employee Management Test Automation

## Overview

This is a Playwright-based Test Automation Framework designed to validate the login functionality of an Employee Management web application. The framework follows a structured Page Object Model (POM), ensuring modularity, maintainability, and scalability of the test scripts.

### Goals of this Framework

- Automate critical login workflows for the Employee Management application.
- Ensure test scripts are scalable and can be easily extended for additional scenarios.
- Improve readability and collaboration by using the Page Object Model pattern.
- Provide a foundation for future enhancements, including reusable fixtures and additional test coverage.
- Implement continuous integration with GitHub Actions for automatic workflow execution on code changes.

This framework is designed to simulate a real-world automation approach for web applications, focusing on clear separation of concerns and ease of maintenance.

## What’s Implemented So Far

- **Login Page**: Validates admin login and handles invalid login attempts.
- **Home Page**: Verifies side panel labels and top banner headings after login.
- **About Page**: Validates about page labels and corresponding values, ensuring that the correct company details are displayed.


## Usage

1. Install dependencies  
`npm init playwright@latest`

2. Run the tests  
`npx playwright test`


## Project Details

- Framework: Playwright (JavaScript)
- Design Pattern: Page Object Model
- Browser: Chromium (default), can be configured for Firefox & WebKit
- Language: JavaScript (no TypeScript for now)

## GitHub Actions CI

This project uses GitHub Actions for **automated test execution** and **manual workflow triggering**.

- The GitHub Actions workflow (`.github/workflows/playwright.yml`) is configured with `workflow_dispatch` to support **manual test runs**.
- Supports manual trigger of workflow from the GitHub Actions tab by clicking the “Run workflow” button.
- Automatic triggers on `push` and `pull_request` is added for automatic workflow runs.

## Next Steps
- Add more test cases for additional workflows, such as logout and dashboard verification.
- Create page objects for additional pages (e.g., Dashboard, Employee List).
- Implement reusable fixtures for common setup and teardown logic.
- Explore integrating test reporting tools for better insights.

---