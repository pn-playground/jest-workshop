# Workshop Refactor - API Testing Workshop

A hands-on workshop demonstrating API testing patterns, mock implementations, and refactoring techniques using Jest and TypeScript.

## 📚 Overview

This workshop teaches fundamental concepts of API testing through practical examples involving user authentication and order management systems. You'll learn how to structure tests, implement mocks, and apply refactoring techniques to improve code quality and maintainability.

## 🎯 Learning Objectives

- **API Testing Fundamentals**: Learn how to test REST APIs with different authentication methods
- **Mock Implementation**: Understand how to create and use mocks for external dependencies
- **Test Organization**: Practice structuring tests for readability and maintainability
- **Payment Processing**: Explore testing patterns for different payment methods and business logic
- **Refactoring Techniques**: Apply refactoring principles to improve test code quality

## 🛠️ Technology Stack

- **Testing Framework**: Jest
- **Language**: TypeScript
- **HTTP Client**: Axios (mocked)
- **Build Tools**: Babel, ts-jest
- **Code Quality**: ESLint, Prettier

## 📋 Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- Basic knowledge of JavaScript/TypeScript
- Understanding of REST APIs and HTTP methods

## 🚀 Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd jest-workshop
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the tests:
   ```bash
   yarn test
   ```

## 🏗️ Project Structure

```
workshop-refactor/
├── jest/
│   ├── support/
│   │   ├── api/           # API helper functions
│   │   │   ├── index.ts   # API exports
│   │   │   ├── loginApi.ts    # Login API functions
│   │   │   ├── orderApi.ts    # Order API functions
│   │   │   └── userApi.ts     # User API functions
│   │   └── mockApi/
│   │       └── mockApi.ts     # Mock API implementation
│   └── tests/
│       ├── createOrder.spec.ts    # Order creation tests
│       └── login.spec.ts          # Login functionality tests
├── package.json
├── jest.config.ts
└── tsconfig.json
```

## 🧪 Test Scenarios

### Authentication Tests

The workshop covers multiple authentication patterns:

- **Admin Login**: Testing admin user authentication
- **Regular User Login**: Testing standard user authentication
- **Timeout Handling**: Testing login with custom timeout configurations
- **Custom Headers**: Testing authentication with additional headers

### Order Management Tests

Learn to test e-commerce functionality:

- **Cash Orders**: Testing immediate payment confirmation
- **Credit Card Orders**: Testing payment processing with fees (2.9%)
- **PayPal Orders**: Testing third-party payment integration with fees (3.4%)

### Key Testing Patterns Demonstrated

1. **Setup and Teardown**: Using `beforeEach` for test preparation
2. **Mocking External APIs**: Complete mock implementation with realistic responses
3. **Authentication Flow**: Token-based authentication testing
4. **Business Logic Validation**: Testing payment calculations and processing fees
5. **Error Handling**: Testing various error scenarios and edge cases

## 📖 Workshop Activities

### Activity 1: Understanding the Current Code Structure

- Explore the existing test files
- Understand the mock API implementation
- Identify code duplication and areas for improvement

### Activity 2: Refactoring Tests

- Extract common test setup into reusable functions
- Reduce code duplication across test files
- Improve test readability and maintainability

### Activity 3: Enhancing Mock APIs

- Extend mock functionality
- Add new test scenarios
- Implement better error handling

### Activity 4: Advanced Testing Patterns

- Implement test data builders
- Create custom matchers
- Add parameterized tests

## 🔧 Configuration Files

- **`jest.config.ts`**: Jest configuration with TypeScript support and custom module mapping
- **`tsconfig.json`**: TypeScript configuration for the project
- **`babel.config.js`**: Babel configuration for JavaScript/TypeScript transformation
- **`.prettierrc`**: Code formatting rules

## 📊 Mock API Endpoints

The workshop includes a comprehensive mock API that simulates:

- `POST /login` - User authentication
- `GET /users/:id` - User information retrieval
- `POST /order` - Order creation
- `GET /orders/:id` - Order retrieval

## 🎨 Code Quality Tools

- **ESLint**: Code linting with TypeScript support
- **Prettier**: Consistent code formatting
- **Jest**: Testing framework with coverage reporting
- **Babel**: JavaScript/TypeScript compilation

## 📈 Test Reports

The project generates HTML test reports in the `html-report/` directory for detailed test analysis and coverage information.

## 🤝 Contributing

This is a workshop project designed for learning. Feel free to:

- Experiment with the code
- Add new test scenarios
- Implement additional refactoring patterns
- Share your improvements with the group

## 📝 Workshop Notes

During the workshop, consider these refactoring opportunities:

1. **DRY Principle**: Eliminate duplicate code in test setups
2. **Single Responsibility**: Ensure each test focuses on one specific behavior
3. **Test Data Management**: Create reusable test data factories
4. **Assertion Improvements**: Use more descriptive custom matchers
5. **Error Testing**: Add comprehensive error scenario coverage

## 📚 Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [TypeScript Testing Best Practices](https://typescript-eslint.io/docs/)
- [API Testing Guidelines](https://restfulapi.net/rest-api-testing/)
- [Refactoring Techniques](https://refactoring.guru/)

## 📄 License

MIT License - Feel free to use this workshop material for educational purposes.
