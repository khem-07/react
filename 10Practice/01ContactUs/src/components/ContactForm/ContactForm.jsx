import React from 'react'
import styles from './Contact.module.css'
import Button from '../Buttons/Button'

function ContactForm() {
  return (
    <section
    className='{styles.container}'>
    <div className= {styles.contact_form}>
      <Button />
    </div>
    <div className={styles.contactImage}></div>
    </section>
  )
}

export default ContactForm
