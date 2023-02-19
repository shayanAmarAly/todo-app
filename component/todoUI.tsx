import React from 'react'

interface IMyProps {
  key: number,
  myValue: string | string[],
}

const todoUI: React.FC<IMyProps> = (props: IMyProps) => {
  return (
    <div className="border-none drop-shadow-md my-2 bg-slate-100 px-2">
      <ol>
        <li>
          <h4>{props.myValue}</h4>
        </li>
      </ol>
    </div>
  )
}

export default todoUI
