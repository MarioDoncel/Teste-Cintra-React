
export const formatDate = (date_EN: string):string => {
  const oldDate = date_EN.split('-')
  const [year, month, day] = oldDate
  const date_BR = `${day}/${month}/${year}`
  return date_BR
}

