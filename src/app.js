const readline = require("readline");
const OtpService = require("./otpService");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const otpService = new OtpService();

console.log("Welcome to the OTP Verification App!");
rl.question("Please enter your email address: ", async (email) => {
  try {
    await otpService.sendOtp(email);
    console.log(`OTP sent to ${email}. Please check your email.`);
    rl.question("Please enter the OTP: ", (enteredOtp) => {
      if (otpService.isOtpValid(enteredOtp)) {
        console.log("OTP verified successfully!");
      } else {
        console.log("Invalid or expired OTP. Please try again.");
      }
      rl.close();
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    rl.close();
  }
});
