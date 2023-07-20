# MyAppWrite

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/venkatramanbehera/myappwrite/blob/main/LICENSE)

MyAppWrite is a Node.js package that extends the functionality of the AppWrite package. It provides additional features and utilities to simplify the integration of your application with the AppWrite backend.

# Installation

Before installing MyAppWrite, you need to ensure that you have the AppWrite npm package installed. If you haven't installed it yet, you can do so using the following command:

```bash 
npm install appwrite
```

Once you have AppWrite installed, you can install MyAppWrite using npm:

```bash
npm install myappwrite
```
# Usage

To use MyAppWrite in your Node.js application, you first need to import both the AppWrite and MyAppWrite modules.

```javascript
import AppwriteService from "myappwrite";
// need to instantiate AppwriteService like this

const appwriteService = new AppwriteService(
      "Your API Endpoint",
      "Your Project ID"
    );
```

Now you can use both the functionalities from the AppWrite package and the extended features provided by MyAppWrite.

# Features
MyAppWrite extends the AppWrite package with the following additional features:

```javascript
    const newUser = {
        email: "user@example.com",
        password: "password123",
        name: "John Doe",
    };
    // for creating a user
    appwriteService.createAccount(newUser);

    const user = {
        email: "user@example.com",
        password: "password123",
    }
    // for login a user
    appwriteService.login(user);

    // for getting current user
    appwriteService.getCurrentUser()

    // for logout the user
    appwriteService.logout()

``````

# Contributing
If you want to contribute to MyAppWrite, feel free to create a pull request with your proposed changes. Please make sure to follow the coding conventions and include tests for any new features you add.

# License
MyAppWrite is licensed under the MIT License. See the LICENSE file for details.

# Support
If you encounter any issues or have questions about using MyAppWrite, you can reach out to us through the Issues section of this repository.

Happy coding with MyAppWrite! 🚀