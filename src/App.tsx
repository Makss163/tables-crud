import React from 'react';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import PostList from './pages/PostList';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index/>
          <Route path='posts' element={ <PostList/> }/>
          <Route path='todos' element={ <TodoList/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
