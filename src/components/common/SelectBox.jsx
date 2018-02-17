import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: '',
};


const styles = {
  boxStyle: {
    border: '0.15rem solid #4598ed',
    borderRadius: '0.2rem',
    width: '85%',
    height: '9rem',
    lineHeight: '9rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#4598ed',
    float: 'left',
    margin: '0 auto',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  textStyle: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '1.5rem',
  },
};

class SelectBox extends Component {
  constructor() {
    super();
    this.state = {
      onHover: false,
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  onMouseEnterHandler() {
    this.setState({
      onHover: true,
    });
  }
  onMouseLeaveHandler() {
    this.setState({
      onHover: false,
    });
  }
  render() {
    return (
      <div style={{height: '11rem', width: '100%', position: 'relative'}} >
        <div style={this.state.onHover || this.props.selected ? { ...styles.boxStyle, backgroundColor: '#4598ed', color: '#FFFFFF' } : styles.boxStyle}
             onMouseEnter={this.onMouseEnterHandler}
             onMouseLeave={this.onMouseLeaveHandler}
             onClick={this.props.onClickHandler}>
          <span style={styles.textStyle}>{ this.props.text }</span>
        </div>
      </div>
    );
  }
}


SelectBox.propTypes = propTypes;
SelectBox.defaultProps = defaultProps;

export default SelectBox;
