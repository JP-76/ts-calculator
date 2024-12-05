# Calculator Library

A simple calculator library written in TypeScript for basic arithmetic operations. Designed to be modular, testable, and easy to integrate into other projects.

---

## Features

- Basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Written in TypeScript for type safety.
- Thoroughly tested using Jest.
- CI/CD integration for automated testing, quality checks, and publishing.

---

## Installation

To install the library, run:

```bash
npm install calculator-lib
```

---

## Usage

### Importing the Library

```typescript
import { add, subtract, multiply, divide } from "calculator-lib";
```

### Example Usage

```typescript
// Addition
const sum = add(5, 3); // 8

// Subtraction
const difference = subtract(5, 3); // 2

// Multiplication
const product = multiply(5, 3); // 15

// Division
const quotient = divide(6, 3); // 2
```

> **Note:** The `divide` function will throw an error if the divisor is 0.

---

## Development

### Prerequisites

Ensure you have the following installed:

- Node.js >= 14
- npm >= 7

### Cloning the Repository

```bash
git clone https://github.com/your-organization/calculator-lib.git
cd calculator-lib
npm install
```

---

## Scripts

### Build

Compile TypeScript into JavaScript:

```bash
npm run build
```

### Run Tests

Run the Jest test suite:

```bash
npm test
```

### Lint

Check for code quality issues using ESLint:

```bash
npm run lint
```

---

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -m "Add my feature"`).
4. Push to your branch (`git push origin feature/my-feature`).
5. Create a pull request.

---

## CI/CD Workflow

This library uses GitHub Actions for CI/CD:

1. **Continuous Integration (CI):**
   - Runs tests and linter on every push or pull request.
   - Performs SonarQube analysis for code quality.

2. **Continuous Deployment (CD):**
   - Publishes to npm automatically when a new tag is pushed (e.g., `v1.0.0`).
   - Notifies the team via Discord webhook.

---

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

For any issues, please create a [GitHub issue](https://github.com/your-organization/calculator-lib/issues).

---

## Author

Developed by [Your Name](mailto:your.email@example.com).