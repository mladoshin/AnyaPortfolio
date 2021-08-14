import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
// import '../../styles/index.css'

function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <div className="bg-gray-100 w-96 h-auto mx-auto rounded-lg shadow-md p-5 flex flex-col items-center">
                <h1>This is first post page!</h1>
                <h2><Link href="/">Back to Home</Link></h2>
                <div className="mx-auto relative w-300px h-400px">
                    <Image src="/images/profile.jpg" layout="fill" />
                </div>
                <button className="rounded-md mx-auto w-20 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mt-10 py-1">
                    Sign up
                </button>
            </div>
        </>
    )
}

export default FirstPost
