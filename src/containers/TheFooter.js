import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://timetap.com.br" target="_blank" rel="noopener noreferrer">Time Tap</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://github.com/bruno-brandao" target="_blank" rel="noopener noreferrer">Bruno Brandão</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
