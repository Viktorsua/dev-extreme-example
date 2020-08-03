import React, { useState, useEffect } from 'react';
import ToDoForm from './todo-form';
import ToDoGrid from './todo-grid';
import { toDoInitial } from './data';
import { localStorageSet, jsonParse } from './utils';

const ToDoList = () => {
  localStorageSet(toDoInitial);
  const getToDoListStorage = localStorage.getItem('toDoList');
  const [toDoList, setToDoList] = useState(jsonParse(getToDoListStorage));
  const [toDoEdit, setToDoEdit] = useState({});

  useEffect(() => {
    localStorageSet(toDoList);
  }, [toDoList]);

  const onSaveClick = (dataId, note) => {
    const ToDoItem = toDoList.filter(({ id }) => id === dataId);
    
    if (ToDoItem.length) {
      
    }



    console.log(dataId, note, ToDoItem);

    // setToDoList();
  };

  const editClick = (data) => {
    setToDoEdit(data);
  };

  const delClick = (data) => {
    const newToDoList = toDoList.filter(({ id }) => id !== data.id);

    setToDoList(newToDoList);
  };

  return (
    <>
      <h2 className={'content-block'}>Title</h2>

      <ToDoForm toDoEdit={toDoEdit} onSaveClick={onSaveClick} />

      <ToDoGrid
        dataSource={toDoList}
        editClick={editClick}
        delClick={delClick}
      />
    </>
  );
};

export default ToDoList;
