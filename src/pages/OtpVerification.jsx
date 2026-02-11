import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function OtpVerification() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Close Button */}
        <div className="flex justify-end">
          <Link to="/" className="text-gray-400 hover:text-gray-600 text-xl">
            ✕
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Verify Your Number
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter the OTP sent to your mobile number
        </p>

        {/* Mobile Number */}
        <div className="mb-6">
          <label className="text-sm text-gray-600 mb-1 block">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* OTP Input */}
        <div className="mb-6">
          <label className="text-sm text-gray-600 mb-2 block">
            Enter OTP
          </label>
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="● ● ● ● ● ●"
            className="w-full text-center tracking-widest text-xl
                       px-4 py-3 border rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* Resend OTP */}
        <div className="text-right mb-6">
          <button className="text-sm text-emerald-600 hover:underline">
            Resend OTP
          </button>
        </div>

        {/* Verify Button */}
        <button
          className="w-full py-3 text-white bg-emerald-500 rounded-xl font-medium
                     hover:bg-emerald-600 transition transform hover:-translate-y-0.5"
        >
          Verify & Continue
        </button>

        {/* Footer Info */}
        <p className="mt-6 text-xs text-center text-gray-400">
          Didn’t receive OTP? Check your network or try again.
        </p>
      </div>
    </div>
  );
}