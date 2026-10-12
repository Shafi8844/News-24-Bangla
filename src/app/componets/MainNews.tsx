import Image from "next/image"
interface MainNews{
    id:string,
    title:string,
    description:string,
    link:string,
    imageUrl:string,
    imageAlt:string,
    category:string
}
// // interface MainNewsProps{
//     news:MainNews[]
// }
const MainNews = ({news}:{news:MainNews[]}) => {
    const [firstNews,...otherNews]=news;
    // const otherNews=news.slice(1);
  return (
    <div className="flex gap-5 mt-5">
        <div className="card bg-base-100 w-96 border border-gray-300">
  <figure>
    <Image className="" src={firstNews.imageUrl} height={600} width={600} alt={firstNews.imageAlt}></Image>
  </figure>
  <div className="card-body">
    <p className="text-red-700 font-semibold">{firstNews.category}</p>
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
  </div>
</div>
    <div className="border border-gray-300 rounded-xl">
        {otherNews.slice(0,4).map(item=><div key={item.id} className="p-3 border-b border-gray-300">
            <p className="text-red-700 font-semibold">{item.category}</p>
            <div>{item.title}</div>
        </div>)}
    </div>
    </div>
  )
}

export default MainNews