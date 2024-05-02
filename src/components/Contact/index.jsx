import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { BeatLoader } from 'react-spinners'
import emailjs from '@emailjs/browser'
import * as S from './styles'

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [invalidFields, setInvalidFields] = useState([])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

    setInvalidFields(invalidFields.filter((field) => field !== e.target.name))

    if (isSubmitting) {
      if (e.target.name === 'user_name' && e.target.value.length < 3) {
        toast.error('Name must be at least 3 characters long', {
          ariaLive: 'assertive',
        })
        return
      }
      if (
        e.target.name === 'user_email' &&
        !/\S+@\S+\.\S+/.test(e.target.value)
      ) {
        toast.error('Invalid email', { ariaLive: 'assertive' })
        return
      }
      if (e.target.name === 'message' && e.target.value.length < 10) {
        toast.error('Message must be at least 10 characters long', {
          ariaLive: 'assertive',
        })
        return
      }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const emptyFields = []

    if (!formData.user_name) emptyFields.push('user_name')
    if (!formData.user_email) emptyFields.push('user_email')
    if (!formData.message) emptyFields.push('message')

    setInvalidFields(emptyFields)

    if (emptyFields.length) {
      toast.error('All fields are required', { ariaLive: 'assertive' })
      return
    }

    setIsSubmitting(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setIsSubmitting(false)
        if (result.status === 200) {
          toast.success('Message sent successfully', { ariaLive: 'assertive' })
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          })
        } else {
          toast.error(result.text, { ariaLive: 'assertive' })
        }
      })
      .catch((error) => {
        setIsSubmitting(false)
        toast.error(error.message, { ariaLive: 'assertive' })
      })
  }

  return (
    <S.Contact id="contact" tabIndex={0}>
      <S.ContactContainer>
        <S.ContactHeading>
          <h2>Contact Me</h2>
          <p>
            If you have any questions or just want to say hi, feel free to
            contact me. I&apos;ll try to get back to you as soon as possible.
          </p>
        </S.ContactHeading>

        <S.ContactForm ref={formRef} onSubmit={handleFormSubmit}>
          <label htmlFor="user_name" className="visually-hidden">
            Name
          </label>
          <S.FormInput
            type="text"
            placeholder="Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            $invalid={invalidFields.includes('user_name')}
            aria-label="Name"
            aria-required="true"
          />

          <label htmlFor="user_email" className="visually-hidden">
            Email
          </label>
          <S.FormInput
            type="email"
            placeholder="Email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            $invalid={invalidFields.includes('user_email')}
            aria-label="Email"
            aria-required="true"
          />

          <label htmlFor="message" className="visually-hidden">
            Message
          </label>
          <S.FormTextArea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            $invalid={invalidFields.includes('message')}
            aria-label="Message"
            aria-required="true"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Send message"
          >
            {isSubmitting ? <BeatLoader color="#ffffff" size={8} /> : 'Send'}
          </button>
        </S.ContactForm>
      </S.ContactContainer>
    </S.Contact>
  )
}
