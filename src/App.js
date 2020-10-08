import React, { useEffect, useState } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import apiRequest from './api/markApi';

import BookMark from './components/BookMark';
import AddBookMark from './components/AddBookMark';


function App() {
  const [marks, setMarks] = useState([]);
  const [categories, setCate] = useState([]);
  useEffect(() => {
    const getMarks = async () => {
      try {
        const response = await apiRequest.getAll();
        if (response.status === 200) {
          setMarks(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMarks();
    const getCate = async () => {
      try {
        const response = await apiRequest.getAllCate();
        if (response.status === 200) {
          setCate(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCate();
  }, [])

  const onAddMark = async (mark) => {
    try {
      const { data } = await apiRequest.create(mark);
      setMarks([
        ...marks,
        data
      ])
    } catch (error) {
      console.log(error);
    }
  }

  const onRemoveMark = (id) => {
    try {
      apiRequest.remove(id);
      const newProduct = marks.filter(mark => mark.id !== id);
      setMarks(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <BookMark marks={marks} categories={categories} onRemove={onRemoveMark} />
          </Route>
          <Route path="/add-bookmark">
            <AddBookMark marks={marks} categories={categories} onAdd={onAddMark} />
          </Route>
        </Switch>
      </HashRouter>


    </div>
  );
}

export default App;
