
import React from 'react'
import { useState } from 'react'
import TodoUI from '../component/todoUI';

var todo: string[] = [];
var TODOS = [todo, ...todo];
const Index = () => {
  const [UserInput, setuserInput] = useState<string>("");
  const [SubmitInput, setsubmitInput] = useState<typeof TODOS>([]);

  const onChangeHandler = (e: any) => { // e = event (values)
    e.preventDefault();
    setuserInput(e.target.value);
    console.log(typeof e.target.value);
    console.log(UserInput);
  }

  const onClickHandler = (e: any) => {
    e.preventDefault();
    setsubmitInput([
      UserInput, ...SubmitInput
    ])
    setuserInput(" ");
  }

  const onDeleteHandler = (todos: any) => {
    setsubmitInput(SubmitInput.filter((todo1) => {
      return todo1 != todos
    }));
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  let day2 = date.toLocaleString('en-us', { weekday: 'long' });
  console.log(day);
  return (
    <>
      <style jsx>{`
      #todo{
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

      }
      @media (max-width: 320px){
          #todo{
            width: 85%;
            padding: 1% 0;
            margin: auto;
            margin-top: 15%;
          }
      }
    `}</style>
    <style global jsx>{`
        body {
            height: 100vh;
            background: #24c690;
            }       
      `}</style>
      <div id='todo' className='w-80 h-96 px-5 py-3 m-auto bg-white text-black border-hidden rounded-2xl my-14 shadow-xl items-center overflow-auto'>
        <h1 className='text-3xl text-center font-bold font-serif mt-10'>{day2}</h1>
        <h1 className='text-1xl text-gray-500 text-center font-san'>{currentDate}</h1>
        <form action="">
          <br /><input className="px-5 w-64 mx-3 h-7 bg-gray-300 text-black rounded-sm" type="text" placeholder='Enter a todo...' value={UserInput} onChange={onChangeHandler} /><button onClick={onClickHandler} className="m-4 bg-gray-500 rounded-sm"></button>
          <ul>
            {
              SubmitInput.length >= 1 ? SubmitInput.map((todo, key) => {
                return <div className='flex justify-between my-1 mx-2'key={key} > <li><TodoUI key={key} myValue={todo}></TodoUI> <hr /> </li> <button className='bg-red-800 text-gray-100 px-1 text-sm h-5 mt-2' onClick={(e) => { e.preventDefault(); onDeleteHandler(todo); }}>Dlt</button></div>
              }) : <p className='mx-2'>Enter a todo into the list</p>
            }
          </ul>
        </form>
      </div>
    </>
  )
}

export default Index
