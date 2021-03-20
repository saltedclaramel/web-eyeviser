import React, { Component } from 'react';
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';

// ReactDOM.render(<DatePicker />, mountNode);
function onChange(time, timeString) {
    console.log(time, timeString);
};

function disabledHours(){

}
class TimePickerSchedule extends Component{
    render(){
        const format = "HH:mm a"
        return (
            <div>
                <TimePicker 
                    use12Hours minuteStep = {60} 
                    format = { format } 
                    size = "large" 
                    style = {{ width: 180 }} 
                    showNow = { false }
                    hideDisabledOptions = { true }
                />
            </div>
        )
    }
}

export default TimePickerSchedule;

// https://ant.design/components/time-picker/