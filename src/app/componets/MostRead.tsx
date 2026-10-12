interface MostReadNews{
    id:string,
    title:string,
}
const MostRead = async() => {
  const res= await fetch('https://news-api-v2.vercel.app/api/news/most-read');
  const data=await res.json();
  const mostRead:MostReadNews[]=data.data;
    return (
    <div className='card p= bg-base-100 border border-gray-300 mt-5
    p-6'>
        <h1 className='font-bold text-red-700 mb-5'>
            সর্বাধিক পঠিত
        </h1>
        <div className='grid gap-3 items-center'>
            {
            mostRead.map((item,indx)=> <div key={item.id} className='flex space-x-2'>
                <p className='text-red-700 font-bold text-xl'>{indx+1}.</p>
                <h2 className='transition-colors hover:text-red-700 font-bold'>{item.title}</h2>
            </div>)
        }
        </div>
    </div>
  )
}

export default MostRead