import React from 'react';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/common/Layout';

/** Страницы */
import PostList from './pages/PostList';
import TodoList from './pages/TodoList';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <MainPage/> }/>
          <Route path='posts' element={ <PostList/> }/>
          <Route path='todos' element={ <TodoList/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
