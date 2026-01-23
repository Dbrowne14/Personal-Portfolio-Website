import React from 'react'

type MyComponentProps = {
    name: string;
    imgUrl: string
}

const logoShell = ({name, imgUrl}: MyComponentProps) => {
  return (
    <div className='flex flex-col logo-card p-1'>
        <div className='h-[75%]'>
          <img src={imgUrl} className="justify-self-center"/>
        </div>
        <div className="h-[25%] font-bold text-[0.6rem] text-highlightRed text-center">
            {name}
        </div>
    </div>
  )
}

export default logoShell
