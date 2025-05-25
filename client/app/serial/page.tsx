"use client";

import api from "@/utils/axiosConfig";
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
};

const SerialList = () => {
    const [data, setData] = useState<SerialData[]>([]);

    useEffect(()=>{
        api.get('/serial')
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))
    },[])


  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="grid md:gap-5 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4">
      {data.map((item) => (
        <div
          key={item._id}
          className="rounded-2xl border p-4 shadow-md bg-white hover:shadow-lg transition"
        >
        <div className="flex justify-between items-center border-b-[1px] mb-4 pb-1">
            <div className="flex gap-1">
              <h2 className="text-xl font-semibold text-indigo-600 capitalize">{item.name}</h2>
              <p className={"text-xs uppercase"}>({item.department})</p>
            </div>
            <p className="text-sm text-gray-600">Serial: {item.serialNo}</p>
        </div>
          <div className="flex justify-between">
            <div>
                <p className="text-sm text-gray-500 mt-1">
                    Serial At: <span className="font-medium">{formatDate(item.serialAt)}</span>
                </p>
                <p className="text-sm text-gray-600">End Class: {item.endClass}</p>
            </div>
            <div>
                <p className="text-sm text-gray-600">Batch: {item.batch}</p>
                <p className="text-sm text-gray-600">ID: {item.id}</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-red-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sequi.</p>
          <button className={"bg-gray-200 w-full py-1 mt-3 hover:bg-gray-300 text-sm"}>Report</button>
        </div>
      ))}
    </div>
  );
};

export default SerialList;
