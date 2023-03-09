export default function hero() {
    return (
        <div>
            <div className="bg-gray-300">
                <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <h1 className="text-black font-bold text-3xl mx-auto flex max-w-7xl items-center justify-between">Blog</h1>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto flex max-w-7xl p-6 pt-5 lg:px-8 relative isolate overflow-hidden py-24 sm:py-32 items-center justify-center">
                    <a href="#hero-blog">
                        <div className="box-content h-96 w-96 m-0.5 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                    </a>
                    <div className="grid grid-cols-2">
                        <a href="#">
                            <div className="box-content h-28 w-28 m-0.5 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </a>
                        <a href="#">
                            <div className="box-content h-28 w-28 m-0.5 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </a>
                        <a href="#">
                            <div className="box-content h-28 w-28 m-0.5 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </a>
                        <a href="#">
                            <div className="box-content h-28 w-28 m-0.5 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}