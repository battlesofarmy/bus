"use client";

import { Skeleton } from '@/components/ui/skeleton';
import api from '@/utils/axiosConfig';
import React, { useEffect, useState } from 'react'

export default function LastSerial() {
  const [lastSerial, setLastSerial] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    api.get('/serial')
    .then((res)=> setLastSerial(res.data.length))
    .catch((err)=> console.log(err))
    .finally(()=> setLoading(false))
  },[])
  return (
    <>
      {
        loading ? 
          <Skeleton className="w-[60px] h-[55px] bg-gray-300" />
          :
          <h2 className={"text-green-700 text-6xl"}>{lastSerial}</h2>
      }
    </>
  )
}
