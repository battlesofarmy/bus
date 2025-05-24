// pages/scan.tsx or app/scan/page.tsx
"use client";
import QrScanner from '@/components/QrScanner'
import { auth } from '@/firebaseConfig'

export default function ScanPage() {
  const handleScan = async (result: string) => {
    // const user = auth.currentUser
    // if (!user) return

    // await fetch('/api/save-scan', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ userEmail: user.email, scannedText: result }),
    // })

    alert('Scan saved!')
  }

  return <QrScanner onScanSuccess={handleScan} />
}
