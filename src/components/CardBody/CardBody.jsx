import React from 'react'
import { styles } from './styles'

const CardBody = ({ title, body }) => {
  return (
    <div style={styles.cardBody}>
      {title}: {body}
    </div>
  )
}

export default CardBody
