import React, {PropTypes} from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container} >
      <p className={title}>Duckr</p>
      <p className={slogan}>Real time web chat!</p>
    </div>
  )
}
