import React from 'react'
import CustomButton from './CustomButton'
import { useStateContext } from '../context'

const Navbar = () => {

  const { connect , address } = useStateContext();
  return (
    <div>
      <div className='flex mx-4'>
        <CustomButton
          btnType="button"
          title={address?'Create a campaign': 'Connect'}
          styles={address? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={()=>{
            if(address) navigate('create-campaign')
            else connect()
          }}
        />
      </div>
    </div>
  )
}

export default Navbar
