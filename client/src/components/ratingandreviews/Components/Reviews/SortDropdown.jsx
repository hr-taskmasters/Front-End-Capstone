import React, { useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function SortDropdown (props) {

  //make the tile of the button change to what item was clicked on
  const [title, setTitle]= useState('relevant');
  const [sortParam, setSortParam] = useState('relevant')
  
  useEffect(() => {
    props.sortBy(sortParam)
  }, [sortParam])
  
  const changeSort = (e) =>{
    setTitle(e.target.name)
    setSortParam(e.target.name)
  } 
 
    return (
      <DropdownButton id="dropdown-basic-button" title={title} variant={'outline-secondary'} >
        <Dropdown.Item href="#/action-1" key={"relevant"} name="relevant" onClick={changeSort}>relevant</Dropdown.Item>
        <Dropdown.Item href="#/action-2" key={"newest"} name="newest" onClick={changeSort}>newest</Dropdown.Item>
        <Dropdown.Item href="#/action-3" key={"helpful"} name="helpful" onClick={changeSort}>helpful</Dropdown.Item>
      </DropdownButton>
    )
}
export default SortDropdown;

