import MainNews from "./componets/MainNews";
import Marqueue from "./componets/marqueue";
import MostRead from "./componets/MostRead";
import NewsCard from "./componets/NewsCard";

interface IOtherSection{
  curationId:string,
  title:string,
  articles:{
    id:string,
    title:string,
    description:string,
    category:string,
    imageUrl:string,
    imageAlt:string,
  }[],
}
export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data= await res.json();
  const section = data.data;
  const mainNews=section[0].articles;

  const otherSection:IOtherSection[]=section.slice(1)
  return (
    <div>
      <Marqueue/>
      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-10">
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>
          <div className="mt-5 grid gap-5">
            {
            otherSection.map(item=><div key={item.curationId}>
              <h1 className="border-b-2 border-red-700 font-bold pb-1 ">{item.title}</h1>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {
                item.articles.map(item=><NewsCard key={item.id} news={item}></NewsCard>)
              }
              </div>
            </div>)
          }
          </div>
        </div>
        <div className="col-span-1">
          <MostRead/>
        </div>
      </div>
    </div>
  );
}
