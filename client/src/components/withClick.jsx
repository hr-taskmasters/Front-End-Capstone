import React from 'react';
import axios from 'axios';
import API_KEY from '../config/config.js';

const withClick = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.widget = WrappedComponent.name;
      this.handleClick = this.handleClick.bind(this);
      this.postClickInfo = this.postClickInfo.bind(this);
    }

    handleClick(e) {
      const data = {
        element: e.target.tagName,
        time: new Date().toString(),
        widget: this.widget
      };
      this.postClickInfo(data);
    }

    postClickInfo(data) {
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/interactions', data, {
        headers: {
          'Authorization': `${API_KEY}`
        }
      })
      .then(response => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      })
    }

    render() {
      return (
        <div onClick={(e)=> { this.handleClick(e); } } >
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  };
};

export default withClick;