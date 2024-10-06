// import { useState } from "react";
// // import Items from "./Basic CRD operation/Items";
// // import NewItem from "./Basic CRD operation/NewItem";
// import Users from "./Context api use/Users";
// import { UserContext } from "./Context api use/UserContext";
// import NewUser from "./Context api use/NewUser";
// import UserProvider from "./Context api use/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "./Page Routing/Contact";
import Blog from "./Page Routing/Blog";
import Error from "./Page Routing/Error";
import Header from "./navigation route/Header";

function App() {
//  eikhane na kore context jekhane create koresi sob okhane pass kore disi provider dara return kore

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
    // <UserContext.Provider value={{ users, setUsers }}>
      <div className="App">
      {/* <UserProvider>
      <NewUser />
      <Users />
      </UserProvider> */}
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="/blog"element={<Blog/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
        
        {/* <NewItem handleNewItem={handleNewItem}/>
      <Items items={items} handleDeleteItem={handleDeleteItem}/> */}
      </div>
    // </UserContext.Provider>
  );
}

export default App;
