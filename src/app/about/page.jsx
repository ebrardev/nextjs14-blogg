import styles from './about.module.css'
import Image from 'next/image'

const AboutPage = () => {
  return (
<div className={styles.container}>
  <div className={styles.textContainer}>
    <h2 className={styles.subtitle}>About Agency</h2>
    <h1 className={styles.title}>
      We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.
    </h1>
    <p className={styles.desc}>
      We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.e a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.
    </p>
    <div className={styles.boxes} >
      <div className={styles.box}>
        <h1>10 K+</h1>
        <p>Project completed</p>
        </div>
        <div className={styles.box}>
        <h1>10 K+</h1>
        <p>Project completed</p>
        </div>
        <div className={styles.box}>
        <h1>10 K+</h1>
        <p>Project completed</p>
        </div>
    </div>
  </div>
  <div className={styles.imgContainer}>
    <Image src="/about.png" alt="picture" fill className={styles.img} />
  </div>
  </div>
  )
}

export default AboutPage