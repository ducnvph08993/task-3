import React, { useEffect, useState } from 'react';
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
        const { data } = await apiRequest.getAll();
        setMarks(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMarks();
    const getCate = async () => {
      try {
        const { data } = await apiRequest.getAllCate();
        setCate(data);
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
      <BookMark marks={marks} categories={categories} onRemove={onRemoveMark} />
      <AddBookMark marks={marks} categories={categories} onAdd={onAddMark} />
    </div>
  );
}

export default App;
