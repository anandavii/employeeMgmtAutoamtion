# Employee Management Test Automation

## Overview

This is a Playwright-based Test Automation Framework designed to validate the login functionality of an Employee Management web application. The framework follows a structured Page Object Model (POM), ensuring modularity, maintainability, and scalability of the test scripts.

### Goals of this Framework

- Automate critical login workflows for the Employee Management application.
- Ensure test scripts are scalable and can be easily extended for additional scenarios.
- Improve readability and collaboration by using the Page Object Model pattern.
- Provide a foundation for future enhancements, including reusable fixtures and additional test coverage.

This framework is designed to simulate a real-world automation approach for web applications, focusing on clear separation of concerns and ease of maintenance.

## What’s Implemented So Far

- Page Object Model (POM) for the Login Page
- Two test cases:
  - Admin login with valid credentials
  - Invalid login with an assertion for "Invalid credentials" message

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

## Next Steps
- Add more test cases for additional workflows, such as logout and dashboard verification.
- Create page objects for additional pages (e.g., Dashboard, Employee List).
- Implement reusable fixtures for common setup and teardown logic.
- Explore integrating test reporting tools for better insights.
