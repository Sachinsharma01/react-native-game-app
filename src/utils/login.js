// const axios = require("axios");
// const base = require("base-64");

// const username = "AC0778fc7a0e31069cc58e74d9756c106f";
// const password = "8588cd915d2bfc3ff56f9c0eb6b25a94";

// const auth = base.encode(`${username}:${password}`);

// export const generateOTP = async (phone) => {
//   console.log("Generate OTP starts", phone);
//   const res = await axios({
//     url: "https://verify.twilio.com/v2/Services/VA8789ec2fbe3d97be10fa0a21492d7fd5/Verifications",
//     method: "POST",
//     data: {
//       To: phone,
//       Channel: "sms",
//       TemplateSid: "HJ152393dff43d3a2c1554ab0f28291dbe",
//     },
//     headers: {
//       Authorization: `Basic ${auth}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   });
//   const data = await res.data;
//   return data;
// };

// export const validateOTP = async (phone,otp) => {
//   const res = await axios({
//     url: "https://verify.twilio.com/v2/Services/VA8789ec2fbe3d97be10fa0a21492d7fd5/VerificationCheck",
//     method: "POST",
//     data: {
//       To: phone,
//       Code: otp,
//     },
//     headers: {
//       Authorization: `Basic ${auth}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   });
//   const data = await res.data;
//   console.log("data %%%%%%%%%%%%%%%%%%%5", data);
//   return data;
// };

