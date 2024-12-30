import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full max-h-[58vh] p-4 flex flex-wrap justify-center gap-10 overflow-auto'>
        {users.map((item, index)=>{
            return <Card handleRemove={handleRemove} id={index} key={index} user={item} />
        })}
    </div>
  )
}

export default Cards