"use client";

import api from '@/utils/axiosConfig';
import React, { useEffect, useState } from 'react'

export default function LastSerial() {
  const [lastSerial, setLastSerial] = useState<number>(0);
  useEffect(()=>{
    api.get('/serial')
    .then((res)=> setLastSerial(res.data.length))
    .catch((err)=> console.log(err))
  },[])
  return (
      <h2 className={"text-green-700 text-6xl"}>{lastSerial}</h2>
  )
}
