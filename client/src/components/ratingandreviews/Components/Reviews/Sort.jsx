import React, { useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function Sort (props) {

  //make the tile of the button change to what item was clicked on
  const[title, setTitle]= useState('Relevance');

  const changeTitle = (e) =>{
    setTitle(e.target.name)
  } 

    return (
      <DropdownButton id="dropdown-basic-button" title={title} variant={'secondary'} >
        <Dropdown.Item href="#/action-1" name="Helpful" onClick={changeTitle}>Helpful</Dropdown.Item>
        <Dropdown.Item href="#/action-2" name="Newest"onClick={changeTitle}>Newest</Dropdown.Item>
        <Dropdown.Item href="#/action-3" name="Relevance" onClick={changeTitle}>Relevance</Dropdown.Item>
      </DropdownButton>
    )
}
export default Sort;

