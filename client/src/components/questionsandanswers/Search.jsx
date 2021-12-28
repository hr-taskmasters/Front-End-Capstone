import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Search = () => {
  return (
    <Form className='q_searchbar' fluid>
      <InputGroup>
        <Form.Control
          type='search'
          placeholder='HAVING A QUESTION? SEARCH FOR ANSWERS...'
        >
        </Form.Control>
        <InputGroup.Text><i class="fas fa-search"></i></InputGroup.Text>
      </InputGroup>

    </Form>
  )
}
export default Search;