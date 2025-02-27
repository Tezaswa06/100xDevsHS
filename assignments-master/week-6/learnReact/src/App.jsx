import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   return (// jsx needs a parent div or if we use header but not inside the div then it will give us the error so we can use <>
//     <div>
//       <HeaderWithButton />
//       <Header title='my sirname is Awasthi'></Header>
//     </div>
//   )
// }
// function HeaderWithButton(){
//   const [title, setTitle] = useState("my name is Tezaswa")
//   function updateTitle(){
//     setTitle("my name is " + Math.random());
//   }
  
//   return <div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//   </div>
// }
// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// function App() {
//   const [title, setTitle] = useState("my name is Tezaswa");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title} />
//       <Header title="Tezaswa" />
//     </div>
//   );
// }

// // React.memo prevents re-rendering if 'title' doesn't change
// const Header = React.memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

// the below code is just an small assignment and in the below code we have seen how keys are important to us
// function App(){
//   const [todos,setTodos] = useState([{
//     id : 1,
//     title : "Study Dsa",
//     description : "study hard",
//   },{
//     id : 2,
//     title : "Study Development",
//     description : "study hard",
//   },{
//     id : 3,
//     title : "Study Gate",
//     description : "study hard",
//   }])

//   function addTodo(){
//     setTodos([...todos,{
//       id : 4,
//       title : Math.random(),
//       description : Math.random()
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(function (todo){
//         return <Todo key={todo.id} title={todo.title} description={todo.description} />
//       })}
//     </div>
//   )
// }
 
// function Todo({title,description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// we do not use wrapper like this

// function App(){
//   return <div>
//     <CardWrapper innerComponent={<TextComponent />} />
//   </div>
// }

// function CardWrapper({innerComponent}){
//   return <div>
//     {innerComponent}
//   </div>
// }

// function TextComponent(){
//   return <div style={{border : "2px solid white"}}>
//     hi there
//   </div>
// }

//  this is how we should use wrapper class
function App(){
  return <div>
    <CardWrapper>
      <div>
        Hi There
      </div>
    </CardWrapper>
  </div>
}

function CardWrapper({children}){
  return <div style={{border : "5px solid blue", padding : 20}}>
    {children}
  </div>
}
export default App
