import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SwiperHome from '../components/Swiper';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lotus Arhitect</title>
        <meta name="description" content="Lotus arhitect company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SwiperHome images={[
        { src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", alt: "" },
        { src: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", alt: "" }
      ]} />
      <SwiperHome images={[
        { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", alt: "" },
        { src: "https://images.unsplash.com/photo-1542711490-65503bcd769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2268&q=80", alt: "" }
      ]} />
      <SwiperHome images={[
        { src: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80", alt: "" },
        { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80", alt: "" }
      ]} />
    </div>
  )
}
