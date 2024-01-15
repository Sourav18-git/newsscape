import React from 'react'
import loading from 'D:\\Frontend Projects\\React\\NewsScape\\newsscape\\src\\loading.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={loading} alt='loading' />
    </div>
  )
}
