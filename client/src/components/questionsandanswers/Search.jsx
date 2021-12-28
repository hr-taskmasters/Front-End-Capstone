import React from 'react';
import { Form } from 'react-bootstrap';

const Search = () => {
  return (
    <Form className='q_searchbar' fluid>
      <Form.Control
      type='search'
      placeholder='HAVING A QUESTION? SEARCH FOR ANSWERS...'
      />
    </Form>
  )
}
export default Search;