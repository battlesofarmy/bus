'use client'

import QRCode from 'qrcode'
import { useEffect, useState } from 'react'

export default function WishQRCode() {
  const [qrUrl, setQrUrl] = useState('')

  useEffect(() => {
    const generate = async () => {
      const data = {
        type: 'wish',
        wishId: 'abc123',
        createdBy: 'admin@example.com',
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
