import Image from 'next/image'
interface News{
    id:string,
    title:string,
    description:string,
    category:string,
    imageUrl:string,
    imageAlt:string
}
const NewsCard = ({news}:{news:News}) => {
  return (
    <div>
        <div className="card bg-base-100  border border-gray-300">
          <figure>
            <Image className="" src={news.imageUrl} height={600} width={600} alt={news.imageAlt}></Image>
          </figure>
          <div className="card-body">
            <p className="text-red-700 font-semibold">{news.category}</p>
            <h2 className="card-title">{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
    </div>
  )
}

export default NewsCard