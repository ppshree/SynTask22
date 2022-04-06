import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header1 from './Header1';
import Login from './Login';
import AddProduct from './AddProduct';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Contact from './Contact'
import Task from './Task/Task';






function App() {
  console.log(Contact[0]);
  
  return (
    <div>
      <Task/>
   {/* <Header/>
   {Contact.map((card)=>{
     return <Note
     key={card.id}
     title={card.title}
     
     email={card.email}
     contact={card.contact}
     />
   })} */}
   {/* <Note 
   title={Contact[0].title}
   image={Contact[0].image}
   email={Contact[0].email}
   contact={Contact[0].contact}
   />
   <Note 
   title={Contact[1].title}
   image={Contact[1].image}
   email={Contact[1].email}
   contact={Contact[1].contact}
   /> */}
   
   {/* <Footer/> */}
      {/* <BrowserRouter>
        <Header1 />
        <h1>Pankaj</h1>
        <Route path='/add'>
          <AddProduct />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
