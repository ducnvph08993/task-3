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
import db from './mock/index';

function App() {
  const [marks, setMarks] = useState([]);
  console.log(marks);
  const [categories, setCate] = useState([]);
  // const url = "https://5f5ee4c3df620f00163e504c.mockapi.io/categories/1/bookmarks";
  useEffect(() => {
    const getMarks = async () => {
      try {
        const response = await apiRequest.getAll();
        console.log(response);
        if (response.status === 200) {
          setMarks(db.Test.mark)
        }
        // setMarks(data);
      } catch (error) {
        console.log(error);
      }

      // (apiRequest.getAll(), {
      //   method: 'get'
      // })
      //   .then(response => console.log(response))

      // .then(data => {
      //   console.log(data);
      //   // setMarks(data)
      // })
    }
    getMarks();
    // const getCate = async () => {
    //   try {
    //     const { data } = await apiRequest.getAllCate();
    //     setCate(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getCate();
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
