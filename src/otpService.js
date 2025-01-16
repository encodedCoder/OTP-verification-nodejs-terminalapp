const sendEmail = require("./utils/email");

const OTP_EXPIRY_TIME = 5; // OTP expiry time in minutes

class OtpService {
  constructor() {
    this.otp = null;
    this.otpGenerationTime = null;
  }

  generateOtp() {
    this.otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    return this.otp;
  }

  async sendOtp(email) {
    this.otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otpGenerationTime = new Date();
    const otpMessage = `
    <!DOCTYPE html>
    <html>
        <body>
        <h1>Welcome to IIT Connect</h1>
        <p>Your Login OTP code is: <b>${this.otp}</b></p>
        <p>This OTP is valid for 5 minutes. Please do not share this OTP with anyone.</p>
        <p>If you did not request this OTP, please ignore this email.</p>
        <p>This email was sent from the domain <a href="https://iitconnect.vercel.app/">iitconnect.vercel.app</a> for the purpose of verifying your login attempt.</p>
        <p><a href="https://iitconnect.vercel.app/">Visit IIT Connect</a></p>
        </body>
    </html>
    `;
    const emailSubject = "IIT Connect OTP Verification";
    await sendEmail(email, emailSubject, otpMessage);
    return this.otp;
  }

  verifyOtp(inputOtp) {
    return this.otp === inputOtp;
  }

  isOtpValid(enteredOtp) {
    const currentTime = new Date();
    const timeDifference = (currentTime - this.otpGenerationTime) / 1000 / 60; // time difference in minutes
    return enteredOtp === this.otp && timeDifference <= OTP_EXPIRY_TIME;
  }
}

module.exports = OtpService;
