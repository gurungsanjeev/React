
import './App.css'
import Box from './Components/Box'


function App() {


 

 type User = {
  name: string,
  number: number
 }
  const user: User= {
    name: "sanjeev",
    number: 1
  }

  console.log({user});
  return (
    <>
    <h1>this is Name: {user.name}</h1>
    <p>type of name is {typeof(user.name)}</p>
    <h1>this is number: {user.number}</h1>
    <p>type of id : {typeof(user.number)}</p>
   
   <Box title="hello" description="word"  />
   
   
    </>
  )
}

export default App
