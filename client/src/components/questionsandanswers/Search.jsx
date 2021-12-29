import React, {useState} from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const getSearchTerm = (e) => {
    if(e.target.value.length > 3) {
      console.log(e.target.value);
    }
  }
  return (
    <Form className='q_searchbar' fluid>
      <InputGroup>
      <i class="fas fa-search"></i>
        <Form.Control
          type='search'
          placeholder='HAVING A QUESTION? SEARCH FOR ANSWERS...'
          onChange={getSearchTerm}
          // onKeyUp={getSearchTerm}
        >
        </Form.Control>
        <InputGroup.Text><i class="fas fa-search"></i></InputGroup.Text>
      </InputGroup>
    </Form>
  )
}
export default Search;