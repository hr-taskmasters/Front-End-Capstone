import React, {useState} from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <Form>
      <Form.Control
        type='text'
        placeholder='HAVING A QUESTION? SEARCH FOR ANSWERS...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    </Form>
  )
}
export default Search;