import React, {useState, useEfect} from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Search = ({search, setSearch}) => {
  return (
    <Form>
        <InputGroup>
        <InputGroup.Text>
        <i className="fas fa-search"></i>
        </InputGroup.Text>
        
        <Form.Control
            type="text"
            placeholder="Search reviews..."
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            />
        </InputGroup>
    </Form>
  )
}
export default Search;