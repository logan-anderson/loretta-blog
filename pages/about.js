import Container from '../components/container'
import PostBody from '../components/post-body'
import Header from '../components/header'
import SectionSeparator from '../components/section-separator'
import Layout from '../components/layout'


export default function About() {
    const content = "I was born and raised in the small province of Canada, in little old PEI.  After getting my BA at University of Prince Edward Island in 1994, I moved to Windsor, ON where I attended the University of Windsor to obtain my Bachelor of Education in Primary/Junior Education.  I officially started my teaching career in 2002 when I finally got my own classroom of kindergarten students at Immanuel Christian School.  Four years later, I moved up to first and second grade.  I am now in my 19th year of teaching at Immanuel.  Also during these years, I got married in 1995 and my husband and I have two children, a son and a daughter who are now both in college!  When I'm not planning my next PBL unit, I love taking photographs, hiking, biking, reading and enjoying a great cup of tea or coffee."
    return (
        <Layout preview={false}>
            <Container>
                <Header />
                <article className="bg-white rounded-md">
                    <div className="rounded-md relative bg-white">
                        <div className="lg:absolute lg:inset-0">
                            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                                <img
                                    className="w-full  object-cover lg:absolute h-full rounded-md"
                                    src="/img/Anderson-0036.jpg"
                                    alt="Loretta Anderson"
                                />
                            </div>
                        </div>
                        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                            <div className="lg:col-start-2 lg:pl-8">
                                <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                    <p className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                                        About Loretta
        </p>
                                    <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                        {/* About Loretta */}
                                    </h1>
                                    <p className="text-lg leading-7 text-gray-500 mb-5">
                                        {content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Container>
        </Layout >
    )
}

