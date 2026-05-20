import React from 'react'

function Header() {
  return (
    <div className='flex justify-between px-10 items-center bg-gray-500'>
        {/*logo*/}
        <img width="80px" className='w[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2pS2Uj-okYc9OjzLzYl3BcFfojCt39fHBQ&s" alt="" />
        {/*ul of links */}
        <ul className='flex gap-10 text-2xl'>
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <li>
                <NavLink to="products">ProductsList</NavLink>
            </li>
            <li>
                <NavLink to="ContactUs">ContactUs</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header