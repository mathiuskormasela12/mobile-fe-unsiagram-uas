import * as yup from 'yup'
import { passwordRegExp } from './registerSchema'

export const loginSchema = yup.object({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required').matches(passwordRegExp, 'Password must contain 8 characters, one uppercase, one lowercase, one number and one special character')
})
