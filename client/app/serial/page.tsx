"use client";

import api from "@/utils/axiosConfig";
import React, { useEffect, useState } from "react";

type SerialData = {
  _id: string;
  name: string;
  batch: string;
  id: number;
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
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4">
      {data.map((item) => (
        <div
          key={item._id}
          className="rounded-2xl border p-4 shadow-md bg-white hover:shadow-lg transition"
        >
        <div className="flex justify-between items-center border-b-2 mb-3 pb-1">
            <h2 className="text-xl font-semibold text-indigo-600">{item.name}</h2>
            <p className="text-sm text-gray-600">Serial: {item.serialNo}</p>
        </div>
          <div className="flex justify-between">
            <div>
                <p className="text-sm text-gray-600">End Class: {item.endClass}</p>
                <p className="text-sm text-gray-500 mt-1">
                    Serial At: <span className="font-medium">{formatDate(item.serialAt)}</span>
                </p>
            </div>
            <div>
                <p className="text-sm text-gray-600">Batch: {item.batch}</p>
                <p className="text-sm text-gray-600">ID: {item.id}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SerialList;
