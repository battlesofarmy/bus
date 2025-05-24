// pages/scan.tsx or app/scan/page.tsx
"use client";
import QrScanner from '@/components/QrScanner'
// import { auth } from '@/firebaseConfig'
import api from '@/utils/axiosConfig';

export default function ScanPage() {
  const handleScan = async (result: string) => {
    // const user = auth.currentUser
    // if (!user) return

    // await fetch('/api/save-scan', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    // //   body: JSON.stringify({ userEmail: user.email, scannedText: result }),
    //   body: JSON.stringify({ userEmail: "johfa@gmial.com", scannedText: result }),
    // })
    await api.post('/serial', result)
    .then((res)=> alert(res.data))
    .catch((err)=> console.log(err))


    alert(result)
  }

  return <QrScanner onScanSuccess={handleScan} />
}
