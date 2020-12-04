import React, { Component } from 'react'
import './timer.css';

export default class Timer extends Component {
    state = {
        hour:17,
        minutes: 58 ,
        seconds: 3,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { hour, seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
           
            
            if (seconds === 0) {
                if (minutes === 0 && hour <= 0) {
                    clearInterval(this.myInterval)
                } 
                
                if(minutes === 0){
                    this.setState(({ hour }) => ({
                        hour:hour-1,
                        minutes: 59,
                        seconds: 59
                    }))
                }else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }             
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { hour, minutes, seconds } = this.state
        return (
            <div>
                { hour === -1 && minutes === 59 && seconds === 59
                    ? <div id="shuru"><h1>C'mon Nigs</h1></div>
                    : <h1>{hour < 10 ? `0${hour}` : hour}<span class="small">H</span>:{minutes < 10 ? `0${minutes}` : minutes}<span class="small">M</span>:<span id="sec">{seconds < 10 ? `0${seconds}` : seconds}<span class="small">S</span></span></h1>
                }
            </div>
        )
    }
}