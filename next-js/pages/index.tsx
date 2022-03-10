import { FC } from "react"
import {GetStaticProps} from "next"
import Head from "next/head"
import Heading from "../components/Heading"
import styles from '../styles/Home.module.scss'
import Socials from '../components/Socials'

import config from '../config/config.json'
import { socialsType } from "../types"

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch(config.serverIp + '/api/socials')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: { socials: data }
  }
}
type homeTypeProps = {
  socials: [socialsType]
}

const Home: FC<homeTypeProps> = ({ socials }) => (

  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Home page" />
    <Socials socials={socials} />
  </div>

)

export default Home
