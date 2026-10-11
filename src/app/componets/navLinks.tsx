import Link from "next/link";
interface navLinksType{
    slug:string,
    title:string,
    topicID:string | null,
    url:string,
    scrapable:boolean
}
const navLinks = async() => {
    const res= await fetch('https://news-api-v2.vercel.app/api/categories');
    const data=await res.json();
    const navs:navLinksType[]=data.data;
    const filteresNav=navs.filter(item=>item.scrapable);
  return (
    <div className="flex gap-5 justify-center mt-4">
        <Link href={'/'}>হোম</Link>
        {
            filteresNav.map((item,indx)=><Link key={indx} href={item.slug}>{item.title}</Link>)
        }
    </div>
  )
}

export default navLinks