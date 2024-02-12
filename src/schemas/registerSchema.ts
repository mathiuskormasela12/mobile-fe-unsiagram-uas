import * as yup from 'yup'

export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const registerSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().optional(),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required').matches(passwordRegExp, 'Password must contain 8 characters, one uppercase, one lowercase, one number and one special character'),
  repeatPassword: yup.string().required('Repeat password is required').oneOf([yup.ref('password')], 'Password do not match')
})
