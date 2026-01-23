import React from 'react'

type MyComponentProps = {
    name: string;
    imgUrl: string
}

const logoShell = ({name, imgUrl}: MyComponentProps) => {
  return (
    <div className='flex flex-col logo-card p-1 dark:bg-[rgba(1,1,1,0.13)] dark:text-[rgb(237,238,245)]'>
        <div className='h-[75%] flex justify-center items-center'>
          <img src={imgUrl} className="justify-self-center h-[90%] w-[90%]"/>
        </div>
        <div className="h-[25%] font-bold text-[0.6rem] text-center">
            {name}
        </div>
    </div>
  )
}

export default logoShell
