import { useCallback, useEffect, useMemo, useState,memo } from 'react';
import axios from 'axios';
import './App.css';

// function App() {
//   const [selecteId,setSelectedId] = useState(1);

//   return (
//     <div>
//       <button onClick={function(){
//         setSelectedId(1)
//       }}>1</button>
//       <button onClick={function(){
//         setSelectedId(2)
//       }}>2</button>
//       <button onClick={function(){
//         setSelectedId(3)
//       }}>3</button>
//       <button onClick={function(){
//         setSelectedId(4)
//       }}>4</button>

//       <Todo id={selecteId} />

//     </div>
//   )
// }

// function Todo({id}){
//   const [todo,setTodo] = useState({});
//   useEffect(function(){
//     axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     .then(function(response){
//       setTodo(response.data)
//     })
//   },[id])

//   return <div>
//     Id : {id}
//     <h1>
//       {todo.title}
//     </h1>
//     <h3>
//       {todo.completed}
//     </h3>
//   </div>
// }

// function App(){
//   const [counter,setCounter] = useState(0);
//   const [inputValue,setInputValue] = useState(1);
  // const[finalValuie,setFinalValue] = useState(0);

  // let count =0; // when we were using this operation it was  each time count was getting updated and 
  // for(let i=1; i<=inputValue; i++){ //  the expensive operation was getting called each time setCounter was called
  //   count = count + i; // but due to which this for loop  gets called which is an expensive operation
  // }// for this we use useMemo gets called to remember the value of count and only gets called when inputValue changes

  // another approach can be usign useEffect which is a good way

  // useEffect(() =>{
  //   let count = 0;
  //   for(let i=1; i<=inputValue; i++){
  //     count = count + i;
  //   }
  //   setFinalValue(count);
  // },[inputValue])

  // best approach is to use useMemo
  // let count = useMemo(() => {
  //   let count = 0;
  //   for(let i=1; i<=inputValue; i++){
  //     count = count + i;
  //   }
  //   return count;
  // },[inputValue])

  // return <div>
  //     <input onChange={function(e){
  //       setInputValue(e.target.value);
  //     }} placeholder={'Find The sum of 1 to n'}/>
  //     <br />
  //     Sum from 1 to n of {inputValue} is {count}
  //     <br />
  //     <button onClick={() => {
  //       setCounter(counter + 1);
  //     }}>counter ({counter}) </button>
  //   </div>

function App(){
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("input function called");
  },[])

  return <div>
    <ButtonComponent inputFunction={inputFunction} />
    <button onClick={function(){
      setCount(count + 1);
    }}>Counter ({count})</button>
  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render");

  return <div>
    <button>Button Clicked</button>
  </div>
})
export default App;
 