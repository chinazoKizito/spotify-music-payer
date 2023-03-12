import React from 'react'
import styles from '../sidebar/artistPill.module.css'
import userImg from './navbarAssets/taylor.jpg'

function UserPill() {
  return (
    <div className={styles.artistContainer} id='userPill'>
        <figure className={styles.imgContainer}>
            <img src={userImg} alt="" className={styles.artistImg} />
        </figure>

        <article className={styles.artistArticle} >
            <h2 className={styles.artistName}>Ceptari Tyas</h2>
        </article>
        <h3> {'>'} </h3>
    </div>
  )
}

export default UserPill
