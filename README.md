# Webdriver IO CLI Test FrameWork 


This is the Initial frame work for automating the web application

## Hybrid Page Object Model 

This framework is an extended version of POM (Page Object Model) that helps users wrap individual elements as predefined control types. Each control type has specific actions, which can be direct or a combination of multiple actions.

Thus, whenever an element is wrapped in a control type, users can directly access all actions specified for that element.
 
## Installation

Install my-project with npm

```bash
    'npm i' to install all the required packages
```
    
## Test Execution

Execute Test with npm scripts

```bash
    'npm loginTest' to trigger the login suite
```

```bash
    'npm dashboardTest' to trigger the dashboard suite
```

```bash
    'npm E2ETest' to trigger the E2E Test, This triggers all the tests within the ./test folder
```

## Report Generation

Generate Report with npm scripts

```bash
    'npm Open-Allure-Report' to Open the Allure Report 
```

## Sample Report

![Sample Allure Report](image.png)