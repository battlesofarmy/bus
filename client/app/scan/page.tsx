// pages/scan.tsx or app/scan/page.tsx
"use client";

import QrScanner from '@/components/QrScanner'
// import { auth } from '@/firebaseConfig'
import api from '@/utils/axiosConfig';
import useAuthStore from '@/utils/store/authStore';
import { useRouter } from 'next/navigation';

import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
// import { ToastAction } from '@radix-ui/react-toast';
import { useState } from 'react';


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



type classTimes = {
  day: string,
}

type classes = {
  courseCode: string,
  from: string,
  to: string,
}

export default function ScanPage() {

  const { user } = useAuthStore();
  const router = useRouter();
  const { toast } = useToast()
  const [showDialog, setShowDialog] = useState(false)
  const [deferredUserData, setDeferredUserData] = useState<any>(null);


  
    
  const handleScan = async (result: string) => {

    if (!user){
        toast({
          variant: "destructive",
          title: "Oh! You are not a Logged in user",
          description: "Please login to add a Serial",
          duration: 3000,
        })
      return;
    }

    await api.get(`/student/${user.uid}`)
    .then((res)=> {
      console.log(res.data)
        const {name, batch, id, department} = res.data;

         api.get(`/schedule`, {
            params: {
              batch, department: department.toLowerCase()
            }
         })
        .then((value)=>{
          

        api.get('/time')
        .then((time)=>{

         const weekday = time.data.weekday;
         const hour = time.data.hour;
         const minute = time.data.minute;
         const second = time.data.second;

        const classList = value.data.classTimes.find((ele:classTimes)=> ele.day === (weekday.toLocaleLowerCase()));

         const currentTime = hour +':'+ minute;
        //  const currentTime = "10:00";
         const matches = classList.classess.filter((ele: classes) => ele.to < currentTime);

         const firstClass = classList.classess[0].from;
         const lastClass = classList.classess[classList.classess.length-1].to;

          // const userData = {"onTime": true, name, id, batch, department }
         let checkOnTime = true;

          // if(((matches.length < classList.classess.length) || matches.length==0) || currentTime < firstClass ){
          //     // Sob Class ses hoy nai
          //     console.log("chor")
          //     checkOnTime = false;
              
          //     const userData = {"onTime": false, name, id, batch, department, endClass:lastClass, serialAt:currentTime +':'+ second}
              
          //     // const currentTime = "10:00";
          //     // const userData = {"onTime": false, name, id, batch, department, endClass:lastClass, serialAt: currentTime}


          //     api.post('/serial', userData)
          //     .then((res)=> {
          //       // alert("Succesfully Added Your Serial");

          //       toast({
          //         variant: "success",
          //         title: "Successfully Added Your Serial!",
          //         description: `Your serial is ${res.data.serialNo}`,
          //         duration: 3000,
          //       })


          //       // setTimeout(() => {
          //       //    router.push('/serial')
          //       // }, 1500);
          //     })
          //     .catch(()=> alert("Fail to add serial"))
          //   }else{
          //     // Class ses sob
          //     // console.log("valo")

          //    const userData = {"onTime": false, name, id, batch, department, endClass:lastClass, serialAt:currentTime +':'+ second}


          //     // const currentTime = "13:00";

          //   //  const userData = {"onTime": true, name, id, batch, department, endClass:lastClass, serialAt:currentTime}
              

          //     api.post('/serial', userData)
          //     .then(()=> alert("Succesfully Added Your Serial"))
          //     .catch((err)=> console.log(err))
              
          //   }

            const userData = {"onTime": true, name, id, batch, department, endClass:lastClass, serialAt:currentTime +':'+ second}

            if(((matches.length < classList.classess.length) || matches.length==0) || currentTime < firstClass  || true){
              // Sob Class ses hoy nai
              console.log("chor")
              setDeferredUserData({...userData, "onTime": false});
              setShowDialog(true);
              return;
            }



            api.post('/serial', userData)
              .then((res)=> {
                toast({
                  variant: "success",
                  title: "Successfully Added Your Serial!",
                  description: `Your serial is ${res.data.serialNo}`,
                  duration: 3000,
                });
                // setTimeout(() => {
                //   router.push('/serial')
                // }, 1500);
              })
              .catch(()=>{
                 toast({
                  variant: "destructive",
                  title: "Faild to add your Serial!",
                  duration: 3000,
                })
              })

          })
          .catch(()=> console.log("Time nai"))

        //   const weekday = currentDat.toLocaleString('en-US', {
        //     timeZone: 'Asia/Dhaka',
        //     weekday: 'short'  // gives "Sun", "Mon", etc.
        //   });
        //   const hour = currentDat.toLocaleString('en-US', {
        //     timeZone: 'Asia/Dhaka',
        //     hour: '2-digit',
        //     hour12: false
        //   });
        //   const minute = currentDat.toLocaleString('en-US', {
        //     timeZone: 'Asia/Dhaka',
        //     minute: '2-digit'  // gives "Sun", "Mon", etc.
        //   });

        //   const classList = value.data.classTimes.find((ele:classTimes)=> ele.day === (weekday.toLocaleLowerCase()));

        //  const currentTime = hour +':'+ minute;
        // //  const currentTime = "10:00";
        //  const matches = classList.classess.filter((ele: classes) => ele.to < currentTime);

        //  const firstClass = classList.classess[0].from;
        //  const lastClass = classList.classess[classList.classess.length-1].to;

        //   // const userData = {"onTime": true, name, id, batch, department }

        //   if(((matches.length < classList.classess.length) || matches.length==0) || currentTime < firstClass ){
        //       // Sob Class ses hoy nai
        //       console.log("chor")

        //       const userData = {"onTime": false, name, id, batch, department, endClass:lastClass}

        //       // api.post('/serial', userData)
        //       // .then(()=> alert("Succesfully Added Your Serial"))
        //       // .catch(()=> alert("Fail to add serial"))
        //     }else{
        //       // Class ses sob
        //       // console.log("valo")

        //       const userData = {"onTime": true, name, id, batch, department, endClass:lastClass}

        //       // api.post('/serial', userData)
        //       // .then(()=> alert("Succesfully Added Your Serial"))
        //       // .catch((err)=> console.log(err))
              
        //     }
        })
        .catch(()=> alert("Faild to find Class Schedule"))
    })
    // .catch((err)=> alert(err.response.data.message))
    .catch(()=> alert("Fail to find this student from Database!"))

  }


  const handleDialogSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget;
    const reason = form.reason.value;
    const newUserData = {...deferredUserData, reason};

    api.post('/serial', newUserData)
    .then((res)=> {
      toast({
        variant: "success",
        title: "Successfully Added Your Serial!",
        description: `Your serial is ${res.data.serialNo}`,
        duration: 3000,
      });
      // setTimeout(() => {
      //   router.push('/serial')
      // }, 1500);
    })
    .catch(()=>{
        toast({
        variant: "destructive",
        title: "Faild to add your Serial!",
        duration: 3000,
      })
    })
  }
  return (
    <>
      <div className='container py-10'>
        <QrScanner onScanSuccess={handleScan} />
      </div>
      <button onClick={() => handleScan("dummy-qr-result")}>Handle Scan</button>
      <Toaster/>



 <Dialog  open={showDialog} onOpenChange={setShowDialog}>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>

    <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleDialogSubmit}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
              header
              <input type="text" id='reason' name='reason' required/>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
         </form>
       </DialogContent>
    </Dialog>
    </>
  )
}