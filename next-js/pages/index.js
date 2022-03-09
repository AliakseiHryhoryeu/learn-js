import Head from "next/head"
import Heading from "../components/Heading"
import styles from '../styles/Home.module.scss'


export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

if(!data){
  return{
    notFound:true
  }
}
  return {
    props: { contacts: data }
  }
}

const Home = () => (

  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Home page" />

  </div>

)

export default Home
