import React, {useEffect, useState} from "react";
import LineChart from "../../components/Charts/LineChart";
import axios from 'axios';
import './hourpage.css';
import DateTimePicker from "../../components/MUIComp/DateTimePicker";
import dayjs from 'dayjs';

const HourPage = () => {

    const [powerData, setPowerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [times, setTimes] = useState([]);

    const defaultDate = dayjs().hour(12).minute(0).second(0);
    const startDateDayjs = dayjs('2023-07-14');

    const [startTime, setStartTime] = useState(defaultDate);
    const [startDate, setStartDate] = useState(startDateDayjs);

    const handleStartTimeChange = (date) => {
    setStartTime(date);
};

    
    const handleStartDateChange = (date) => {
    setStartDate(date);
    }

    const getData = () => {
        const formattedDate = startDate.format('YYYY-MM-DD');
        const formattedTime = startTime.format('HH:mm:ss');
        axios.get(`/HourPage?startDate=${formattedDate}&startTime=${formattedTime}`)
            .then(res => {
                console.log(res);
                let tempData = [];
                let tempTime = [];
                for (const dataObject of res.data) {
                    tempData.push(parseFloat(dataObject.power));
                    tempTime.push(dataObject.minute);
                }
                setPowerData(tempData);
                setTimes(tempTime);
                let sum;
                sum = tempData.reduce(function (a, b) {
                    return a + b;
                });
                setTotal(sum);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(() => {
        console.log("selected start date: " + startDate);
        console.log("selected start time: " + startTime)
        getData();
    }, [startDate, startTime]);


    return (
        <div className="hourContainer">
            <div>
                <h1 className="hourOpener" >Hourly Data</h1>
                <br></br>
                <p className="hourP" >Here you can select a start date and time to see the power readings for each minute of the selected hour. Please note that data collection started on July 10th and ended on July 24th so dates before or after this might return no data</p>
            </div>
            <div className="lineContainer">
                {!loading && <LineChart powerData={powerData} labels={times} />}
                <h2 className="wattageTotal">Total watts for hour: {total.toFixed(2)}</h2>
                <DateTimePicker
                    startDate={startDate}
                    onStartDateChange={handleStartDateChange}
                    onStartTimeChange={handleStartTimeChange}
                    startTime={startTime}
                />
            </div>
        </div>
        
    );
}

export default HourPage;