import React from 'react'

function Card({user, handleRemove, id}) {
  return (
    <div className='w-36 h-full bg-white rounded-md flex flex-col items-center p-2'>
        <div className='image h-16 w-16 bg-gray-400 rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={user.image} alt="" />
        </div>
        <h1 className='mt-1 text-center text-xl font-semibold '>{user.name}</h1>
        <h3 className='opacity-40 text-xs text-center font-semibold'>{user.email}</h3>
        <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-600 rounded-md text-white text-xs font-semibold mt-2'>Remove</button>
    </div>
  )
}

export default Card