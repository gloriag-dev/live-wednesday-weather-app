import React from 'react'
import FormattedDate from '../utils/FormattedDate'
import WeatherIcon from './WeatherIcon'
import WeatherTemperature from './WeatherTemperature'

export default function WeatherInfo(props) {
    return(
        <div className='WeatherInfo'>
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date}></FormattedDate>
                </li>
            </ul>
            <div className='row mt-3'>
                <div className='col-6' >
                    <div className='d-flex'>
                        <div><WeatherIcon code={props.data.icon} size={52}></WeatherIcon></div>
            <WeatherTemperature celsius={props.data.temperature}></WeatherTemperature>
                    </div>
                </div>

                <div className='col-6'>
            <ul>
                <li>Humidity: {props.data.humidity}</li>
                <li> Wind: {props.data.wind}</li>
            </ul>
                </div>
            </div>
        </div>
    )
}