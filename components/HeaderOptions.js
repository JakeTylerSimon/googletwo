import React from 'react'
import HeaderOption from './HeaderOption'

const HeaderOptions = () => {
  return (
    <div>
        <div className='flex space-x-6 '>
            <HeaderOption />
        </div>
        
        <div className='flex space-x-4'>
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions