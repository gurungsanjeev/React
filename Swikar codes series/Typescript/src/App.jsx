import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("sanjeev")
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Rajan"
    },
    {
      id: 2,
      name: "Sanjay"
    },
    {
      id: 3,
      name: "Rahul"
    }
  ])

  // const id2 = user.find((item) => {
  //   console.log("find user chalyo")
  //   if (item.id == 3) {
  //     return item;
  //     console.log({item})
  //   }

  // })


  const id2 = useMemo(() => {

    const foundUser = user.find((item) => {
      console.log("find user chalyo")
      if (item.id == 3) {
        return item;
        console.log({ item })
      }
      
    })
    return foundUser;
  }, [user])


  function handleClick() {
    setName("hari")
  }


  const nickName = name + "babu"

  return (
    <>
      <h1>The name of ID 2 = {id2.name}</h1>
      Hello {nickName}
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
