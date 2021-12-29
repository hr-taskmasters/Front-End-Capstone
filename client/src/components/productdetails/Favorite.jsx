import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Favorite() {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  }

  return (
    <Button variant="light" className="btn btn-default btn-md p_fav" onClick={handleClick}>
      {like ? <i className="fas fa-star p_like"></i>: <i className="far fa-star"></i>}
    </Button>
  )
}

export default Favorite;
