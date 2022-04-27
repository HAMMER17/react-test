
import React, { Component } from 'react'
import sun from '../images/sun.png'

const API_KEY = 'a8a235869a69d9b215946bc2f20c0681'

export default class Weather extends Component {
  state = {
    temp: '',
    city: '',
    country: '',
    sunrise: '',
    pressure: '',
  }
  getWeather = async (e) => {
    e.preventDefault()

    const city = e.target.city.value
    const url_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await url_api.json()

    const sunrise = data.sys.sunrise

    const date = new Date()
    date.setTime(sunrise)
    const date_sunrise = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: date_sunrise,
      pressure: data.main.pressure,
    })
  }
  render() {
    return (
      <form onSubmit={this.getWeather}>
        <div className="card m-3 weather" style={{ maxWidth: 650 }}>
          <div className="row g-0">
            <div className="col-md-8" >
              <div className="col-md-4">
                <img src={sun} alt="sun" style={{ maxWidth: 350 }} className="start" />
              </div>
              <div className="card-body">
                <h1>погода</h1>
                <input className='form-control m-1 w' type="text" name='city'
                  placeholder='название города...' />
                <ul className="list-group list-group-flush">
                  <li className='list-group-item bg-success m-1'>Температура : {this.state.temp}</li>
                  <li className='list-group-item bg-warning m-1'>Город : {this.state.city}</li>
                  <li className='list-group-item bg-info m-1'>Страна : {this.state.country}</li>
                  <li className='list-group-item bg-danger m-1'>Восход солнца : {this.state.sunrise}</li>
                  <li className='list-group-item bg-primary m-1'>Давление : {this.state.pressure}</li>
                </ul>
                <hr />

                <button className='btn btn-outline-secondary'>Получить погоду</button>

              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
