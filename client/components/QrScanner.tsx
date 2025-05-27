// components/QrScanner.tsx
'use client'

import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode'
import { useEffect } from 'react'

interface Props {
  onScanSuccess: (result: string) => void
}

export default function QrScanner({ onScanSuccess }: Props) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: 250,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    }, false)

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText)
        scanner.clear()
      },
      (error) => {
        console.log("Scan error", error)
      }
    )

    return () => {
      scanner.clear().catch(() => {})
    }
  }, [])

  // return <div id="reader" />
  return (
      <>
        <style>
          {`
            #reader button {
              background-color: #4f46e5;
              color: white;
              font-size: 16px;
              padding: 10px 20px;
              border-radius: 8px;
              border: none;
              cursor: pointer;
            }

            #reader button:hover {
              background-color: #4338ca;
            }

          /* Style the camera selector dropdown */
            #reader select {
              background-color: white;
              border: 1px solid #ccc;
              padding: 8px 12px;
              border-radius: 8px;
              font-size: 16px;
              margin-bottom: 12px;
              width: 100%;
            }
            #reader select:focus {
              border-color: #4f46e5;
              outline: none;
              box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
            }

          `}
        </style>
        <div
          id="reader"
          style={{
            border: "2px solid #4f46e5",
            borderRadius: "12px",
            padding: "10px",
            background: "#f9f9f9",
          }}
      />
      </>
);

}
