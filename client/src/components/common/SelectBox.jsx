import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: '',
};

const width = window.innerWidth;

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
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  boxStyleXs: {
    border: '0.1rem solid #4598ed',
    borderRadius: '0.1rem',
    width: '92%',
    height: '4.2rem',
    lineHeight: '4.2rem',
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: '550',
    color: '#4598ed',
    float: 'left',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
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
      <div>
        <MediaQuery query="(max-width: 768px)">
          <div style={this.props.selected || (this.props.focus && this.state.onHover) ? { ...styles.boxStyleXs, backgroundColor: '#4598ed', color: '#FFFFFF', height: '4.2rem', lineHeight:
          '4.2rem'} : styles.boxStyleXs}
               onMouseEnter={this.onMouseEnterHandler}
               onMouseLeave={this.onMouseLeaveHandler}
               onClick={this.props.onClickHandler}>
            <span style={styles.textStyle}>{ this.props.text }</span>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <div style={this.props.selected || (this.props.focus && this.state.onHover) ? { ...styles.boxStyle, backgroundColor: '#4598ed', color: '#FFFFFF' } : styles.boxStyle}
               onMouseEnter={this.onMouseEnterHandler}
               onMouseLeave={this.onMouseLeaveHandler}
               onClick={this.props.onClickHandler}>
            <span style={styles.textStyle}>{ this.props.text }</span>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


SelectBox.propTypes = propTypes;
SelectBox.defaultProps = defaultProps;

export default SelectBox;
