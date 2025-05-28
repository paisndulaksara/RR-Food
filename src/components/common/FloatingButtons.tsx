// src/components/common/FloatingButtons.tsx
"use client";
import QRCodeButton from "./QRCodeButton";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-6 z-[100]">
      <div className="z-[60]">
        <QRCodeButton />
      </div>
      <div className="z-[50]">
        <WhatsAppButton />
      </div>
    </div>
  );
}

