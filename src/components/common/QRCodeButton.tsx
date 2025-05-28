// src/components/common/QRCodeButton.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { MdQrCode } from "react-icons/md";

export default function QRCodeButton() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowQR(true)}
        className="w-14 h-14 bg-[#c9a566] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
        aria-label="Show QR Code"
      >
        <MdQrCode size={28} className="text-white" />
      </button>

      {showQR && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setShowQR(false)}
        >
          <div
            className="bg-white dark:bg-black p-4 rounded-lg relative max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-2 right-2 text-black dark:text-white"
            >
              <FiX size={20} />
            </button>
            <Image
              src="/images/qr-code.png"
              alt="QR Code"
              width={250}
              height={250}
              className="mx-auto"
            />
            <p className="text-center mt-2 text-sm text-black dark:text-white">
              Scan this QR to connect instantly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
