"use client";

import { Skeleton } from "@/components/ui/skeleton";
import api from "@/utils/axiosConfig";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
};

const SerialList = () => {
    const [data, setData] = useState<SerialData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        api.get('/serial')
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false))
    },[])


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
                    <button className={"bg-gray-200 w-full py-1 mt-3 hover:bg-gray-300 text-sm"}>Report</button>
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
    </div>
  );
};

export default SerialList;
