import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkLines from 'react'


class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    return (<tr key={`${cityData.city.id}${Date.now()}`}>
      <td>{cityData.city.name}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>)
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City:</th>
          <th>Temperature:</th>
          <th>Pressure:</th>
          <th>Humidity:</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
