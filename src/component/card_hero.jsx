import {} from 'next/app'

export default function HeroCard({ data }) {
    return (
        <>
            <div className="bg-red-100">
                <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <h1 className="text-red-300 font-bold text-3xl mx-auto flex max-w-7xl items-center justify-between">{data}</h1>
                </div>
            </div>
        </>
    )
}