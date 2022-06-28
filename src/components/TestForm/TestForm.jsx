import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormControl, ListGroup } from "react-bootstrap";
import './TestForm.css'

export const TestForm = (props) => {
  const [state, setState] = useState(0);
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);
  const [eror, setEror] = useState(false);
  const [search, setSearch] = useState('');
  const [dataServ, setDataServ] = useState([]);
  const [select, setSelect] = useState('');
  const [searchSort, setSearchSort] = useState('');

  useEffect(() => {
    async function test() {
      const serverData = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await serverData.json();
      setDataServ(data);
    } test();
  }, [])

  const addNumber = (event) => {
    event.preventDefault();

    const addNumber = {
      title: String(state),
      id: Math.random().toString(36).substring(2, 9)
    }
    setDataServ([...dataServ, addNumber])
    setState(0)
  }

  const addInputText = (event) => {
    event.preventDefault();
    const addInput = {
      title: text,
      id: Math.random().toString(36).substring(2, 9)
    }

    if (!text.trim()) {
      setEror(true)
    }

    if (text.trim()) {
      setDataServ([...dataServ, addInput])
      setText('')
      setEror(false)
    }
  }

  const deleteItem = (id) => {
    setDataServ([...dataServ].filter((item) => item.id !== id))
  }

  const inputChange = (event) => {
    setText(event.target.value)
  }

  const filterStatus = () => {
    switch (searchSort) {
      case 'sortSmaller':
        return [...dataServ].sort((a, b) => a.id - b.id)

      case 'bodyLager':
        return [...dataServ].sort((a, b) => b.id - a.id)

      case 'showIdMore50':
        return [...dataServ].filter(item => item.id > 50);

      case 'showTitleMore50':
        return [...dataServ].filter(item => item.title.length > 50);

      case 'sortTitleByAlphavit':
        return [...dataServ].sort((a, b) => a.title.localeCompare(b.title));

      case 'sortBodyByAlphavit':
        return [...dataServ].sort((a, b) => a.body.localeCompare(b.body));

      default:
        return [...dataServ];
    }
  }

  const arr = filterStatus().filter(item => {
    return item.title
      .toLowerCase()
      .includes(search.toLowerCase()) || String(item.id)
        .toLowerCase()
        .includes(search.toLowerCase()) || item.body
          .toLowerCase()
          .includes(search.toLowerCase());
  });

  return (
    <div className="news">
      <Button
        variant="outline-dark"
        onClick={() => setShow(!show)}
        className='button showButton'
      >
        show/hide data service
      </Button>
      {show ?
        <>
          <div className="news-top">
            <Button variant="outline-dark" className="button" onClick={() => setState(state + 1)}>add</Button>
            <Button variant="outline-dark" className="button" onClick={() => setState(state - 1)}>delete</Button>
            <Button variant="outline-dark" className="button" onClick={() => setState(0)}>reset</Button>
            <p className="showState">{state}</p>
            <Button variant="outline-dark" className="button" onClick={addNumber}>add numder in data list</Button>
          </div>
          <div className="selectDiv">
            <FormControl
              value={text}
              type="text"
              onChange={inputChange}
              placeholder='Add in data list'
            />
            <div className="button-eror">
              <Button className="button" variant="outline-dark" type="submit" onClick={addInputText}>add input in data list</Button>
              {eror && (
                <p className="showState eror">Write the text</p>
              )}
            </div>
            <FormControl
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder='Search in data list'
            />
            <Form.Select value={select} onChange={(event) => setSelect(event.target.value)}>
              <option>Open this select menu for select json item</option>
              <option value='title'>title</option>
              <option value='id'>id</option>
              <option value='body'>body</option>
            </Form.Select>
            <Form.Select value={searchSort} onChange={(event) => setSearchSort(event.target.value)}>
              <option>Open this select sort menu</option>
              <option value='defaultList'>default list</option>
              <option value='sortSmaller'>sort from smaller id to larger id</option>
              <option value='bodyLager'>sort from larger id to smaller id</option>
              <option value='showIdMore50'>show item with id {">"} 50</option>
              <option value='showTitleMore50'>show item with title.length {">"} 50</option>
              <option value='sortTitleByAlphavit'>sort title by alphavit</option>
              <option value='sortBodyByAlphavit'>sort body by alphavit</option>
            </Form.Select>
          </div>
          <ListGroup>
            {show ?
              arr.map((data) => {
                return <ListGroup.Item className="listData" key={data.id}>
                  {select === 'body' ? data.body : select === 'id' ? data.id : data.title}
                  <Button className="button" variant="outline-dark" onClick={() => deleteItem(data.id)}>delete</Button>
                </ListGroup.Item>
              }) : null}
          </ListGroup></>
        : null}
    </div>
  )
};

