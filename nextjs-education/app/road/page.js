"use client"
import React from 'react'
import styles from './page.module.css'

const Page = () => {

    console.log(process.env.API_KEY)
    return (
        <>
            <div className={styles.container}>Page</div>
            <div className={`${styles["container-one"]}  ${styles["sm-size"]}`}>Page</div>
        </>
    )
}
export default Page