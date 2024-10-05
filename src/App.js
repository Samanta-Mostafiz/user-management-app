import { useState } from "react";
// import Items from "./Basic CRD operation/Items";
// import NewItem from "./Basic CRD operation/NewItem";
import Users from "./Context api use/Users";
import { UserContext } from "./Context api use/UserContext";
import NewUser from "./Context api use/NewUser";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "pranto",
    },
    {
      id: 2,
      name: "riya",
    },
    {
      id: 3,
      name: "samanta",
    },
  ]);

  // // this state is for basic crd operation
  //   const [items,setItem]= useState([
  //     {
  //       id: 1,
  //       name: "earphone"
  //     },
  //     {
  //       id: 2,
  //       name: "mouse"
  //     },
  //     {
  //       id: 3,
  //       name: "pendrive"
  //     },
  //   ]);

  //   // create korte hobe delete er jonne ekta function ja child theke data ene debe ei parent e
  //   const handleDeleteItem=(id)=>{
  //   const filtered=items.filter(item=>item.id!==id);
  //   setItem(filtered);
  //   }
  //   const handleNewItem=(newI)=>{
  //     // console.log(item)
  //     setItem(prev=>[...prev,newI]);
  //   }

  return (
    // globally declare kore dilam
    <UserContext.Provider value={{ users, setUsers }}>
      <div className="App">
      <NewUser/>
        <Users />
        {/* <NewItem handleNewItem={handleNewItem}/>
      <Items items={items} handleDeleteItem={handleDeleteItem}/> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
