// pages/scan.tsx or app/scan/page.tsx
"use client";

// import QrScanner from '@/components/QrScanner'
// import { auth } from '@/firebaseConfig'
import api from '@/utils/axiosConfig';
import useAuthStore from '@/utils/store/authStore';

export default function ScanPage() {

  const { user } = useAuthStore();
    
  const handleScan = async (result: string) => {

    if (!user){
      alert("Login First");
      return;
    }

    await api.get(`/student/${user.uid}`)
    .then((res)=> {
        const {name, batch, id, depertment} = res.data;
        const userData = {
            name,
            id,
            batch,
            depertment,
            endClass: "11:10 AM",
        }

        console.log(res.data);

        // api.post('/serial', userData)
        // .then(()=> alert("Your serial is 22"))
        // .catch((err)=> console.log(err))
    })
    .catch((err)=> alert(err.response.data.message))
  }

//   return <QrScanner onScanSuccess={handleScan} />
  return <button onClick={() => handleScan("dummy-qr-result")}>Handle Scan</button>
}