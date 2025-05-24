'use client'

import QRCode from 'qrcode'
import { useEffect, useState } from 'react'

export default function WishQRCode() {
  const [qrUrl, setQrUrl] = useState('')

  useEffect(() => {
    const generate = async () => {
      const data = {
            name : "muntasir",
            batch : "30",
            id : "18",
            endClass : "11:40 AM",
            serialNo : "12"
        }

      const url = await QRCode.toDataURL(JSON.stringify(data))
      setQrUrl(url)
    }

    generate()
  }, [])

  return (
    <div>
      <h2>Wish QR Code</h2>
      {/* Only render <img> if qrUrl is ready */}
      {qrUrl ? <img src={qrUrl} alt="Wish QR Code" /> : <p>Loading...</p>}
    </div>
  )
}
