import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Zoom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      zoom: false,
      mouseX: null,
      mouseY: null
    }

    const { height, img, transitionTime, width } = props;

    this.outerDivStyle = {
      height: `${height}px`,
      width: `${width}px`,
      overflow: 'hidden',
    }

    this.innerDivStyle = {
      height: `${height}px`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'auto 100%',
      transition: `transform ${transitionTime}s ease-out`,
      backgroundImage: `url('${img}')`,
    }

    this.imageRef = createRef();
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
  }

  handleMouseOver () {
    this.setState({ zoom: true })
  }

  handleMouseOut () {
    this.setState({ zoom: false })
  }

  handleMouseMovement (e) {
    const { left: offsetLeft, top: offsetTop } = this.imageRef.current.getBoundingClientRect();

    const {
      current: {
        style: {
          height,
          width,
        },
      },
    } = this.imageRef;

    const x = ((e.pageX - offsetLeft) / parseInt(width, 10)) * 100;
    const y = ((e.pageY - offsetTop) / parseInt(height, 10)) * 100;

    this.setState({
      mouseX: x,
      mouseY: y,
    })
  }

  render () {
    const { mouseX, mouseY, zoom } = this.state;
    const { zoomScale } = this.props;
    const transform = {
      transformOrigin: `${mouseX}% ${mouseY}%`,
    };

    return (
      <div
        style={this.outerDivStyle}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onMouseMove={this.handleMouseMovement}
        onClick={this.props.onClick}
        ref={this.imageRef}
        className='p_pic_expanded_zoom'
      >
        <div
          style={{
            ...transform,
            ...this.innerDivStyle,
            transform: zoom ? `scale(${zoomScale})` : 'scale(1.0)',
          }}
        />
      </div>
    )
  }
}

Zoom.propTypes = {
  img: PropTypes.string.isRequired,
  zoomScale: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  transitionTime: PropTypes.number,
}

Zoom.defaultProps = {
  transitionTime: 0.1,
}

export default Zoom;