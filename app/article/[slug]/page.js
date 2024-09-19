export default function Article({ params }) {
    return (
        <main>
            <h1>Article: {params.slug}</h1>
        </main>
    )
}