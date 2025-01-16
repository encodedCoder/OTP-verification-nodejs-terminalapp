# My Terminal App

This project is a terminal-based application that implements email OTP (One-Time Password) verification. It allows users to generate, send, and verify OTPs through a simple command-line interface.

## Project Structure

```
my-terminal-app
├── src
│   ├── app.js          # Entry point of the application
│   ├── otpService.js   # Service for OTP generation and verification
│   └── utils
│       └── email.js    # Utility for sending emails
├── package.json        # NPM configuration file
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-terminal-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

##

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
SMTP_SERVER=<your-smtp-server>
SMTP_PORT=<your-smtp-port>
EMAIL_USERNAME=<your-email-username>
EMAIL_PASSWORD=<your-email-app-password>
RECEIVER_EMAIL=<receiver-email>
MONGO_URI=<your-mongo-uri>
DATABASE_NAME=<your-database-name>
USERS_COLLECTION=<your-users-collection>
TEST_EMAILS=<your-test-emails>
```

## Usage

1. Start the application:
   ```
   node src/app.js
   ```
   ```
   or
   ```
   ```
   npm start
   ```
2. Follow the prompts to generate and verify your OTP.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
