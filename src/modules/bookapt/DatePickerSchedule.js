import React, { Component } from 'react';
import { DatePicker, Space, RangePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';


function onChange(date, dateString) {
  console.log(date, dateString);
}

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

class DatePickerSchedule extends Component{
    render(){
        return (
            <DatePicker 
                onChange = {onChange} 
                size = "large"
                disabledDate = {disabledDate}
                format = "DD-MM-YYYY"
                disabledDate = { disabledDate }
                style = {{ width: 180 }} 

            />
            
        )
    }
}

export default DatePickerSchedule;