import {
    Card
} from "@/components/ui/card"

export default function Profile(){
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-10">
            <div className="flex flex-col md:grid gap-10 md:grid-cols-2 text-neutral-200 md:items-center">
                <Card className="grayscale hover:filter-none hover:cursor-pointer w-auto h-[400px] rounded-2xl bg-[url('/images/me/444.jpg')] bg-cover bg-center border-none" />

                <div className="text-center md:text-left items-center">
                    <h1 className="text-2xl font-bold">Shaad Lee Hue</h1>
                    <div className="text-md lg:text-lg font-semibold">
                        Title: <span className="text-sky-800">Software Development Engineer</span>
                    </div>
                </div>
            </div>
        </main>
    )
}