"use client";

import { Skeleton } from "@/components/ui/skeleton";
import api from "@/utils/axiosConfig";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

type SerialData = {
  _id: string;
  name: string;
  id: number;
  batch: string;
  department: string;
  endClass: string;
  serialAt: string;
  serialNo: number;
  onTime: boolean;
  reason: string;
  reports: [string];
};

const SerialList = () => {
    const [data, setData] = useState<SerialData[]>([]);
    const [loading, setLoading] = useState(true);
    const [showReport, setShowReport] = useState<boolean>(false);
    const [reportId, setReportId] = useState<string>('');


    useEffect(()=>{
        api.get('/serial')
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false))
    },[data])

    const handleReportSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const form = e.currentTarget;
      const report = form.report.value;
      console.log(reportId, 'report id');

      api.post(`/serial/report/${reportId}`, {report})
      .then(()=>{
        console.log("succesfully added");
        setData(data);
        setShowReport(false);
      })
      .catch((err)=> console.log(err))
    }



  return (
    <div className="">
      <div className="grid md:gap-5 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-5">
        {
          loading === true ?
          (
            Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="w-[100%] h-[200px] bg-gray-300" />
            ))
          )
          :
          (
            data.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl border p-4 shadow-md bg-white hover:shadow-lg transition"
              >
              <div className="flex justify-between items-center border-b-[1px] mb-4 pb-1">
                  <div className="flex gap-1">
                    <h2 className={`text-xl font-semibold ${item.onTime ? "text-indigo-600" : "text-red-600" }  capitalize`}>{item.name}</h2>
                    <p className={"text-xs uppercase"}>({item.department})</p>
                  </div>
                  <p className="text-sm text-gray-600">Serial: {item.serialNo}</p>
              </div>
                <div className="flex justify-between">
                  <div>
                      <p className="text-sm text-gray-500 mt-1">
                          Serial At: <span className="font-medium">{item.serialAt}</span>
                      </p>
                      <p className="text-sm text-gray-600">End Class: {item.endClass}</p>
                  </div>
                  <div>
                      <p className="text-sm text-gray-600">Batch: {item.batch}</p>
                      <p className="text-sm text-gray-600">ID: {item.id}</p>
                  </div>
                </div>
                {/* If add serial before class end  */}
                {
                  !item.onTime &&
                  <div>
                    <p className="mt-5 text-sm text-red-600">{item?.reason}</p>

                  {
                    item.reports && item.reports.map((report: string, i)=>
                      <div className="flex gap-2 mt-1">
                        <p className="text-sm">{i+1}</p>
                        <p className="text-xs">{report}</p>
                      </div>
                    )
                  }

                    <button className={"bg-gray-200 w-full py-1 mt-3 hover:bg-gray-300 text-sm"} onClick={()=> {setShowReport(true), setReportId(item._id) }}> Report</button>
                  </div>
                }
              </div>
            ))
          )

        }
      </div>
        {
          !loading && data.length === 0 && (
            <div className="flex justify-center mt-[10vh]">
              <div className="text-center">
                <p className="text-center text-gray-600 text-lg">No Serial Added Yet! 🎉🍾🎈</p>
                <Link href='/scan'>
                  <button className={"bg-gray-200 py-2 px-4 mt-4 rounded"}>Become First! 💝</button>
                </Link>
              </div>
            </div>
          )
        }


  <Dialog  open={showReport} onOpenChange={setShowReport}>
    <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleReportSubmit}>
          <DialogHeader>
            <DialogTitle>Report The User</DialogTitle>
            <DialogDescription>
              উক্ত ব্যাক্তির ক্লাস শেষ হওয়ার আগে সিরিয়াল দেওয়ার কারন যদি মিথ্যে হয় তবে তা সকালের সামনে তুলে ধরুন! (শুধু মাএ এডমিন অভিযোগকারির পরিচয় যানতে পারে)
            </DialogDescription>
          </DialogHeader>
          <div className="py-5">
              <textarea className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4f46e5] sm:leading-6" id='report' name='report' required rows={4}></textarea>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Go Back</Button>
            </DialogClose>
            <Button type="submit" className='bg-[#4f46e5] hover:bg-[#4338ca] text-white'>Submit Report</Button>
          </DialogFooter>
         </form>
       </DialogContent>
    </Dialog>


    </div>
  );
};

export default SerialList;
