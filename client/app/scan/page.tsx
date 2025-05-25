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
    console.log(result);

    await api.get(`/student/${user.uid}`)
    .then((res)=> {
      console.log(res.data)
        const {name, batch, id, department} = res.data;
        // const userData = {
        //     name,
        //     id,
        //     batch,
        //     department,
        //     endClass: "11:10 AM",
        // }
         api.get(`/schedule/`, {
            params: {
              batch, department: department.toLowerCase()
            }
         })
        .then((value)=>{
          
          const currentDat = new Date(Date.now());

          const weekday = currentDat.toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
            weekday: 'short'  // gives "Sun", "Mon", etc.
          });
          const hour = currentDat.toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
            hour: '2-digit',
            hour12: false
          });
          const minute = currentDat.toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
            minute: '2-digit'  // gives "Sun", "Mon", etc.
          });

          const classList = value.data.classTimes.find((ele)=> ele.day === (weekday.toLocaleLowerCase()));

        // const tem = classList.classess.find((ele) => {
        //   return ele.from.slice(0, 2) < '12';
        // });
        //   console.log(tem)
         const currentTime = "11:10";

          // const matches = classList.classess.filter(ele => ele.from.slice(0, 2) <= "12:50");
          const matches = classList.classess.filter(ele => ele.to <= currentTime);
          const lastMatch = matches[matches.length - 1];

          const firstClass = classList.classess[0].from;

          if(((matches.length < classList.classess.length) || matches.length==0) || currentTime < firstClass ){
              // chor maybe
              console.log("chor")
            }else{
              // Well student
              console.log("valo")
              
            }
            console.log(matches.length,  classList.classess.length); // ✅ last class before 12

        })
        .catch((err)=> console.log(err))

        // console.log(res.data);

        // api.post('/serial', userData)
        // .then(()=> alert("Your serial is 22"))
        // .catch((err)=> console.log(err))
    })
    // .catch((err)=> alert(err.response.data.message))
    .catch((err)=> alert(err.message))
  }

//   return <QrScanner onScanSuccess={handleScan} />
  return <button onClick={() => handleScan("dummy-qr-result")}>Handle Scan</button>
}