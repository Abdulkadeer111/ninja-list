import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keyword" content="ninjas"/>
      </Head>
      <div>      
        <h1 className={ styles.title }>Homepage</h1>
        <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum totam officia nesciunt accusantium enim minima suscipit, eius rerum labore optio omnis ex sequi quas eligendi ducimus sit est unde.</p>
        <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, labore iure aspernatur eum asperiores minima! Modi ipsam tenetur explicabo nostrum quas aperiam eaque qui rerum. Perspiciatis voluptate est earum magnam?</p>
        <Link href="/ninjas" className={ styles.btn }>See Ninjas Listing</Link>      
      </div>
    </>
  )
}
