import ArticleTextDisplay from "@/app/components/ArticleTextDisplay"
import { formatDateForArticle } from "@/app/components/utils"
import data from '@/app/data.json'


export default function Article({ params }) {
    const slug = params.slug
    const articleData = data.find((article) => article.id == slug)
    const articleDate = formatDateForArticle(articleData.publishedDate)

    return (
        <main className="w-[70%] py-20 m-auto">
            <img 
                src={articleData.image.url} 
                alt={articleData.image.alt}
                className="w-[100%] min-w-[300px] bg-cover"
            ></img>
            <br></br>
            <br></br>
            <h1 className="text-5xl">{params.slug
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
            </h1>
            <br></br>
            <h2 className="text-2xl">{articleDate}</h2>
            <br></br>
            {articleData?.articleText?.map((text, i) => (
                <div key={i}>
                    <ArticleTextDisplay key={i} data={text.data} type={text.type} />
                    <br></br>
                </div>
            ))}
        </main>
    )
}