import * as yup from 'yup'

export const addPostSchema = yup.object({
  caption: yup.string().required('Caption is required')
})
