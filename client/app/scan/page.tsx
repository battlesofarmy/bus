// pages/scan.tsx or app/scan/page.tsx
"use client";

// import QrScanner from '@/components/QrScanner'
// import { auth } from '@/firebaseConfig'
import api from '@/utils/axiosConfig';
import useAuthStore from '@/utils/store/authStore';

export default function ScanPage() {

  const { user } = useAuthStore();
    
  const handleScan = async (result: string) => {

    if (!user) return;

    console.log(result);


    await api.get(`/student/${user.uid}`)
    .then((res)=> {
        const {name, batch, id} = res.data;
        const userData = {
            name,
            batch,
            id,
            endClass: "11:10 AM",
            serialNo: 12
        }

        api.post('/serial', userData)
        .then(()=> alert("Your serial is 22"))
        .catch((err)=> console.log(err))
    })
    .catch((err)=> console.log(err))
  }

//   return <QrScanner onScanSuccess={handleScan} />
  return <button onClick={() => handleScan("dummy-qr-result")}>Handle Scan</button>
}