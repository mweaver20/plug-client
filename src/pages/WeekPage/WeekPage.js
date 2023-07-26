import React, {useEffect, useState} from "react";
import WeekPieChart from "../../components/Charts/WeekPieChart";
import axios from 'axios';
import './weekpage.css';
import Datepicker from '../../components/MUIComp/DatePicker.js';
import dayjs from "dayjs";

const WeekPage = () => {
    const [powerData, setPowerData] = useState([]); //data points for charts
    const [date, setDate] = useState([]); //matching dates for data points
    const [loading, setLoading] = useState(true); //to ensure results are returned before chart is rendered
    const [total, setTotal] = useState(0); //total watts from returned data
    const [startDate, setStartDate] = useState(new Date('2023-07-15')); //date to select data from

    const getData = () => {
        const formattedDate = dayjs(startDate).format('YYYY-MM-DD HH:mm:ss');
        axios.get(`/WeekPage?startDate=${formattedDate}`)
            .then(res => {
                //console.log(res);
                let tempData = [];
                let tempDate = [];
                for (const dataObject of res.data) {
                    tempData.push(parseFloat(dataObject.total_power));
                    tempDate.push(dataObject.date);
                }
                setPowerData(tempData);
                setDate(tempDate);
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
    } //end of getData method

    useEffect(() => {
        console.log("selected start date: " + startDate);
        getData();
    }, [startDate]);


    const handelStartDateChange = (date) => {
        setStartDate(new Date(date.toISOString().split('T')[0]));
    }

    return (
        <div className="weekContainer">
            <div className="weekHeader">
            <h1 className="weekOpener">Weekly data</h1>
            <br></br>
            <p className="weekP">Here you can select a start date and see the total power used for each day of that week. Please note that data collection started on July 10th and ended on July 24th so dates before or after this might return no data</p>
            </div>
            
            <div className="PieContainer">
                {!loading && <WeekPieChart powerData={powerData} dates={date} />}
                <h2 className="wattageTotal">Total kW for week: {(total / 1000).toFixed(2)}</h2>
                <Datepicker startDate={startDate} onStartDateChange={handelStartDateChange} />
            </div>
        </div>
    );
}

export default WeekPage;