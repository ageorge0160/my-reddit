import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class SubFilter extends Component {
  render() {
    const {value, onChange, options} = this.props
    return(
      <div>
        <h1>{value}</h1>
          <select onChange={event => onChange(event.target.value)} value={value}>
            {options.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
          ))}
        </select>
      </div>
    )
  }
}

SubFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
