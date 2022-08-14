import React, { useRef, useState } from 'react'
import './ContactForm.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  email: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  message: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  submit: {
    '&': {
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#6de9ab',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const ContactForm = () => {
  const form = useRef();
  const [send, setSend] = useState(false);
  const [values, setValues] = useState({ email: '', msg: '' })
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles()

  const handleEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('service_exvxbog', 'template_l769n7f', form.current, 'user_XTqJbFq1kdADh5igo2O2Q')
      .then((result) => {
        setSend(true);
        setValues({ email: '', msg: '' })
        setIsLoading(false);

      }, (error) => {
        console.log(error.text);
        setIsLoading(false);
      });
  }
  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={handleEmail}
        ref={form}
      >
        <TextField
          type="email"
          name="email"
          label="Email"
          className={classes.email}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          variant="filled"
        />
        <TextField
          type="text"
          name="message"
          label="Message"
          className={classes.message}

          value={values.msg}
          onChange={(e) => setValues({ ...values, msg: e.target.value })}
          multiline
          rows="5"
          variant="filled"
        />
        {isLoading ? <Button className={classes.submit} disabled type="submit" variant="contained">
          Loading...
        </Button> : <>{send ? (
          <p className="email-success">Your Message has been send!</p>
        ) : (
          <Button className={classes.submit}
            type="submit" variant="contained">
            Submit
          </Button>
        )}</>}
      </form>
    </div>
  )
}

export default ContactForm
