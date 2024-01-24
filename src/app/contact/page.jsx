import styles from './contact.module.css'
import Image from 'next/image'
const ContactPage = () => {
  return (
<div className={styles.container}>
  <div className={styles.imgContainer}>
    <Image src="/contact.png" alt="picture" fill className={styles.img} />
    </div>
    <div className={styles.formContainer}>
      <form action='' className={styles.form}>
        <input type="text" placeholder="Name Surname" className={styles.input} />
        <input type="email" placeholder="email adress" className={styles.input} />
        <input type="text" placeholder="Phone number" className={styles.input} />
        <textarea placeholder="Message" cols="30" rows="10" className={styles.textarea} />
        <button className={styles.btn}>Send</button>
        </form>
      </div>
  </div>
  )
}

export default ContactPage