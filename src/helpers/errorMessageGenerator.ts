export const errorMessageGenerator = (
  errors: Record<string, string[]> | null | undefined,
  message: string | null | undefined,
  defaultMessage: string
): string => {
  if (message) {
    return message
  } else if (errors) {
    let errorMessage = ''
    for (const error of Object.values(errors)) {
      errorMessage += error.join(' ')
      errorMessage += ' '
    }
    return errorMessage
  } else {
    return defaultMessage
  }
}
