import React, { useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function SortDropdown (props) {

  //make the tile of the button change to what item was clicked on
  const[title, setTitle]= useState('Relevance');
  
  useEffect(() => {
    props.sortBy(title)
  }, [title])
  
  const changeTitle = (e) =>{
    setTitle(e.target.name)
    props.sortBy(title)
  } 
  // const sortBy = () => {
  //   props.sortBy(title)
  // }


    return (
      <DropdownButton id="dropdown-basic-button" title={title} variant={'secondary'} >
        <Dropdown.Item href="#/action-1" name="Relevant" onClick={changeTitle}>Relevant</Dropdown.Item>
        <Dropdown.Item href="#/action-2" name="Newest" onClick={changeTitle}>Newest</Dropdown.Item>
        <Dropdown.Item href="#/action-3" name="Helpful" onClick={changeTitle}>Helpful</Dropdown.Item>
      </DropdownButton>
    )
}
export default SortDropdown;

