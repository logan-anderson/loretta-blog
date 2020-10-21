import { useRouter } from "next/router"

export const Hero = () => {
    const IMG_URL = "/img/Anderson-0036_Cropped.jpg"
    const router = useRouter()

    return (
        <section className="overflow-hidden">
            <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
                <svg className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404">
                    <defs>
                        <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
                </svg>
                <svg className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width={404} height={784} fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
                </svg>
                <div className="relative lg:flex lg:items-center">
                    <div className="hidden lg:block lg:flex-shrink-0">
                        <img className="h-64 w-64 rounded-full xl:h-80 xl:w-80" src={IMG_URL} alt="" />
                    </div>
                    <div className="relative lg:ml-10">
                        <blockquote className="relative">
                            <div className="text-2xl leading-9 font-medium text-gray-900">
                                <p>
                                    Hi! I'm Loretta Anderson and I teach first and second grade at Immanuel Christian School in Prince Edward Island, Canada.  I'm relatively new to teaching PBL but I am loving it and want to share my PBL journey with you.
              </p>
                            </div>
                            <footer className="mt-8">
                                <div className="flex">
                                    <div className="flex-shrink-0 lg:hidden">
                                        <img className="h-12 w-12 rounded-full" src={IMG_URL} alt="" />
                                    </div>
                                    <div className="ml-4 lg:ml-0">
                                        <span class="inline-flex rounded-md shadow-sm">
                                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-800 focus:shadow-outline-indigo active:bg-blue-800 transition ease-in-out duration-150" onClick={() => {
                                                router.push('/about')
                                            }}>
                                                More about Loretta
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}