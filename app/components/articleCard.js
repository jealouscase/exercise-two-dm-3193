import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
    return (
        <div className="border border-black w-full flex p-4 gap-6">
            <Image 
                src={article.image.url} 
                alt={article.image.alt} 
                width={300} 
                height={200} 
            />
            <div className="flex flex-col justify-between items-start gap-2">
                <h2 className="text-2xl font-bold">
                    {article.id
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                </h2>
                <h3>{article.publishedDate}</h3>
                <p>{article.articleText[0].data}</p>
                <Link href={`article/${article.id}`} className="font-bold text-blue-700">Read More</Link>
            </div>
        </div>
    )
}