import React, { useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function Sort (props) {

    return (
      <DropdownButton id="dropdown-basic-button" title="Dropdown button" variant={'secondary'}>
        <Dropdown.Item href="#/action-1">Helpful</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Newest</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Relevant</Dropdown.Item>
      </DropdownButton>
    )
}
export default Sort;

