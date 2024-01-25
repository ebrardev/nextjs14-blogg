import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.imgContainer}>
          <Image src="/post.png" alt="" fill className={styles.img} />
        </div>
     
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
         
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
        
            </span>
          </div>
        </div>
        <div className={styles.content}>kfksjjkfdsjfdfdssjkdfjdkfjdksjk</div>
      </div>
    </div>
  )
}

export default SinglePostPage