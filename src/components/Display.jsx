import React from 'react'

const Display = ({value} ) => {
  return (
    <div className='bg-gray-800 text-right text-3xl p-4 rounded-2xl min-h-[64px] text-cyan-100 shadow-inner'>
      {value || '0'}
    </div>
  )
}

export default Display
