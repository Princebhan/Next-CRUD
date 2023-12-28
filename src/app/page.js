import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{textAlign:"center"}}>
     <Link href="/addproduct">Add Product</Link> <br/><br/>
     <Link href="/productlist">Product List</Link> 
    </main>
  )
}
