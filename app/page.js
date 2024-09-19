import data from './data.json'
import ArticleCard from './components/articleCard'

export default function Home() {
    return (
        <main className='px-32 py-16'>
            <h1 className='text-5xl'>Articles</h1>
            <br></br>
            <br></br>
            <div className='flex flex-col gap-10'>
                {data.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </main>
    )
}