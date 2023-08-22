"use client";
import { useCookies } from 'react-cookie';
import AddOilWidget from './components/AddOilWidget';
import DateWidget from './components/DateWidget';
import ImageWidget from './components/ImageWidget';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAddOil, useGetAddOilNumber } from './api/useApi';
import { Toaster, toast } from 'react-hot-toast';

export default function Home() {
  const [ip, setIp] = useState("");
  const { addOil, loading: addOilLoading, } = useAddOil(ip);
  const { total, todayTotal, refresh, loading, error } = useGetAddOilNumber();

  useEffect(() => {
    const getIp = async () => {
      const res = await fetch("https://api.ipify.org?format=json");
      const { ip } = await res.json();
      setIp(ip);
    };
    getIp();
  }, []);

  return (
    <main className="flex flex-col items-center justify-around p-4 m-4 bg-slate-100 font-roboto rounded-md shadow-md" >
      <div><Toaster /></div>
      <DateWidget />
      <ImageWidget />
      <button className='bg-nogizaka text-white p-4  mt-4 mb-2 rounded-xl' onClick={() => {
        if (!ip) {
          toast.error("請聯絡開發者");
        }
        if (!addOilLoading) {
          const addOilPromise = addOil(refresh);
          toast.promise(addOilPromise, { loading: "集氣中", success: "成功集氣", error: (error) => error.toString() });
        }
      }}>為掛橋集氣</button>
      <AddOilWidget total={total} todayTotal={todayTotal} loading={loading} />
    </main>
  );
}
