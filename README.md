# NODEJS SDK for AMITY SOCIAL API

![SDK Logo](sdk_logo.png) <!-- If you have a logo, add it here -->

Welcome to the unofficial NODEJS SDK repository! This SDK is designed to simplify the integration and interaction with the AMITY SOCIAL REST API. It provides an easy-to-use set of functions and classes that abstract away the complexities of making API requests, handling responses, and managing authentication.

## Table of Contents
- [Supported APIs](#supported-apis)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Supported APIs
Below is a table with a key of the supported API functions covered in this SDK and the key that matches it.
|Functions |Supported |
| :--- | :---: |
|Authentication|Full|
|Follow|Partial|
|Community|Partial|
|UsersV3|Partial|


Updated info on what APIs we currently support will be available in our latest [releases](https://github.com/Farosoft-Open-Source/amity-nodejs-sdk/releases)

## Installation

To get started with the AMITY SOCIAL SDK, you can simply install it using npm (https://en.wikipedia.org/wiki/Npm). Here's how you can do it using [example package manager]:

```bash
npm install @fs-open-source/amity-nodejs-sdk
```

Or if you're using yarn:

```bash
yarn add @fs-open-source/amity-nodejs-sdk
```

## Usage

Using the AMITY SOCIAL SDK in your project is straightforward. First, import the SDK into your code:

```javascript
const { AmityClient } = requir('@fs-open-source/amity-nodejs-sdk');
```

## Authentication

Before you start making API requests, you'll need to set up authentication. The AMITY SOCIAL SDK supports various authentication methods, including API keys and OAuth tokens.
The following list of environment variables need to be set for access to APIs requiring secure tokens.
```bash
X_SERVER_KEY
```

Please refer to our official documentation for Amity (https://api-docs.amity.co/) more information on authentication methods and how to set them up.

## Examples

### Creating user token for authentication

```javascript
// Creating user info
const userId = '123456';
const resource = await AmityClient.Authentication.getAuthenticationToken(userId);
console.log('Resource:', resource);
```

## Contributing

We welcome contributions from the community! If you'd like to contribute to the AMITY SOCIAL SDK, please follow these steps:

1. Fork the repository and create a new branch.
2. Make your changes, add new features, or fix issues.
3. Write tests to cover your changes if applicable.
4. Submit a pull request explaining your changes and their benefits.

## License

This SDK is released under the [Your License Name] License. See [LICENSE](LICENSE) for more details.

---

If you have any questions, feel free to contact us at through email [here](mailto:fsadmin@farosoft.io) or visit our website [https://farosoft.io](https://farosoft.io). We're here to help!

