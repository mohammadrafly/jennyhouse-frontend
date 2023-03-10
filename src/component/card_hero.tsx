import {} from 'next/app'
import { useRouter } from "next/router";

export default function HeroCard() {
    const router = useRouter();
    const { title } = router.query;
    return (
        <>
            <div className="bg-red-100">
                <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <h1 className="text-red-300 font-bold text-3xl mx-auto flex max-w-7xl items-center justify-between">{title}</h1>
                </div>
            </div>
        </>
    )
}