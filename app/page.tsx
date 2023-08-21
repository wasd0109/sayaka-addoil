"use client"
import { useCookies } from 'react-cookie'
import AddOilWidget from './components/AddOilWidget'
import DateWidget from './components/DateWidget'
import ImageWidget from './components/ImageWidget'
import { use, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useAddOil, useGetAddOilNumber } from './api/useApi'
import { Toaster, toast } from 'react-hot-toast'

export default function Home() {
  const [cookies, setCookie] = useCookies(["uuid"]);
  const { addOil, success: addOilSuccess, loading: addOilLoading, error: addOilError } = useAddOil(cookies.uuid);
  const { total, todayTotal, loading, error } = useGetAddOilNumber();

  useEffect(() => {
    if (!cookies.uuid) {
      const uuid = uuidv4();
      setCookie("uuid", uuid);
    }
  }, [cookies, setCookie])


  console.log(cookies)

  return (
    <main className="flex min-h-dscreen max-h-dscreen flex-col items-center justify-around p-4 m-4 bg-slate-100 font-roboto">
      <div><Toaster /></div>
      <DateWidget />
      <ImageWidget />
      <button className='bg-nogizaka text-white p-4  mt-4 mb-2 rounded-xl' onClick={() => {
        const addOilPromise = addOil()
        toast.promise(addOilPromise, { loading: "集氣中", success: "成功集氣", error: (error) => error.toString() });
      }}>為掛橋集氣</button>
      <AddOilWidget total={total} todayTotal={todayTotal} loading={loading} />
    </main>
  )
}
