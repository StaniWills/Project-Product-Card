import { getProducts } from '../../requests/products'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage';
import ProductsPage from '../../pages/ProductsPage';
import UsersPage from '../../pages/UsersPage';
import { getUsers } from '../../requests/users'
import ToDoPage from '../../pages/ToDoPage';
import { getToDos } from '../../requests/todos'

function App() {

  const [ products, setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    getUsers(setUsers);
    getToDos(setTodos);
  }, []);

  const createNewProduct = product => setProducts(state => [...state, product]);
  const createNewUser = user => setUsers(state => [...state, user]);
  const createNewToDo = todo => setTodos(state => [...state, todo]);

  return (
    <div>
      <Context.Provider value={{ products, users, createNewProduct, createNewUser, todos, createNewToDo }}>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/products' element={ <ProductsPage /> } />
          <Route path='/users' element={ <UsersPage /> } />
          <Route path='/todos' element={ <ToDoPage /> } />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;