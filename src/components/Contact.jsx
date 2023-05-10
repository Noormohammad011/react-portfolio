import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { contact } from '../data'
import { toast } from 'react-toastify'
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${import.meta.env.VITE_MY_SERVICE_ID}`,
        `${import.meta.env.VITE_MY_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_MY_USER_ID}`
      )
      .then(
        (result) => {
          toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
          console.log(result.text)
        },
        (error) => {
          toast.error('Something went wrong, please try again!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <section id='contact' name='contact' className='section bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact Me
          </h2>
          <p className='subtitle'>
            I like to create things with fun, open-minded people. Feel free to
            contact me.
          </p>
        </div>
        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const { icon, title, text, subtitle, description } = item
              return (
                <div key={index} className='flex flex-col lg:flex-row gap-x-4'>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1'>{subtitle}</p>
                    <p className='text-accent font-normal'>{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          {/* form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input
                type='text'
                className='input'
                placeholder='Your Name'
                name='user_name'
              />
              <input
                type='email'
                className='input'
                placeholder='Your Email'
                name='user_email'
              />
            </div>
            <input
              type='text'
              className='input'
              placeholder='Subject'
              name='subject'
            />
            <textarea
              className='textarea'
              placeholder='Your Message'
              name='message'
            ></textarea>
            <button
              className='btn btn-lg bg-accent hover:bg-accent-hover'
              value='Send'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
