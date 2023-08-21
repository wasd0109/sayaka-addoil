import AddOilWidget from './components/AddOilWidget'
import DateWidget from './components/DateWidget'
import ImageWidget from './components/ImageWidget'

export default function Home() {
  return (
    <main className="flex h-dscreen flex-col items-center justify-around p-4 bg-slate-100 m-4 font-roboto">
      <DateWidget/>
      <ImageWidget/>
      <button className='bg-nogizaka text-white p-4 rounded-xl'>為掛橋集氣</button>
      <AddOilWidget/>
    </main>
  )
}
