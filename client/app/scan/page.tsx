// pages/scan.tsx or app/scan/page.tsx
"use client";
import QrScanner from '@/components/QrScanner'
// import { auth } from '@/firebaseConfig'
import api from '@/utils/axiosConfig';
import useAuthStore from '@/utils/store/authStore';

export default function ScanPage() {
  const { user } = useAuthStore();
    
  const handleScan = async (result: string) => {

    if (!user) return;

    const userData = {
        name: "user"
    }
    // uid: TAC8g9IkSag5m7Gy6wouaShD7YF2


    await api.post('/serial', result)
    .then((res)=> alert(res.data))
    .catch((err)=> console.log(err))


    alert(result)
  }

  return <QrScanner onScanSuccess={handleScan} />
}
