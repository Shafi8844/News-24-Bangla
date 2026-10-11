import { Span } from 'next/dist/trace';
import MarqueeText from 'react-marquee-text';
import "react-marquee-text/dist/styles.css"
interface Headlines{
    id:string,
    title:string
}
const marqueue = async() => {
    const res= await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data=await res.json();
    const headlines:Headlines[]= data.data;
    console.log(headlines)
  return (
    <div className='bg-red-700 text-white'>
        <div className='flex items-center max-w-7xl mx-auto'>
            <div className='bg-red-800 py-1 px-5'>সর্বশেষ</div>
            <MarqueeText direction='right' duration={15}>
        {
            headlines.map((item,indx)=> <span key={indx}>
                <span>{item.title}</span>
                <span className='mx-5'>•</span>
            </span>)
        }
        </MarqueeText>
        </div>
    </div>
  )
}

export default marqueue