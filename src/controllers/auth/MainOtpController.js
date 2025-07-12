import GenerateOtp from "../../fonction/GenerateOtp.js";
import adminModel from "../../models/adminModel.js";
import otpModel from "../../models/otpModel.js";
import { client } from "../../services/whatsapp/whatsappConnect.js";
import WhstappBody from "../../services/whatsapp/WhstappBody.js";
const MainOtpController = async (req, res) => {
  try {
    const number = req.body.number;

    if (!number) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    const fineUser = await adminModel.findOne({ User_Phone_Number: number });
    if (fineUser) {
      const findOtp = await otpModel.findOne({ Phone_Number: number });
      if (findOtp) {
        try {
          await WhstappBody(client, number, findOtp.otp, "Login");
          return res.status(200).json({
            success: true,
            message: "OTP sent successfully!",
            data: {
              phoneNumber: findOtp.Phone_Number,
              otp: findOtp.otp,
            },
          });
        } catch (error) {
          console.error("WhatsApp error:", error);
          return res.status(500).json({
            success: false,
            message: "Failed to send OTP via WhatsApp",
            error: error.message,
          });
        }
      }
      // Generate new OTP for new number
      const otp = GenerateOtp();
      const MainOtp = await otpModel.create({
        otp: otp,
        Phone_Number: number,
      });

      try {
        await WhstappBody(client, number, otp, "Login");
        return res.status(200).json({
          success: true,
          message: "OTP sent successfully!",
          data: {
            phoneNumber: MainOtp.Phone_Number,
            otp: MainOtp.otp,
          },
        });
      } catch (error) {
        console.error("WhatsApp error:", error);
        return res.status(500).json({
          success: false,
          message: "Failed to send OTP via WhatsApp",
          error: error.message,
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "User not found please signup",
      });
    }
  } catch (error) {
    console.error("Error in MainOtpController:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export default MainOtpController;
