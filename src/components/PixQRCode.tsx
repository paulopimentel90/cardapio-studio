import { QRCodeSVG } from "qrcode.react";

interface PixQRCodeProps {
  payload: string;
}

export function PixQRCode({ payload }: PixQRCodeProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-center">
      <QRCodeSVG value={payload} size={240} />
    </div>
  );
}