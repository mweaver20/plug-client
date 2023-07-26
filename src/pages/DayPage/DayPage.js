import React, {useEffect, useState} from "react";
import DayBarChart from "../../components/Charts/DayBarChart";
import axios from 'axios';
import './daypage.css';
import dayjs from "dayjs";
import Datepicker from "../../components/MUIComp/DatePicker";

const DayPage = () => {
    const [powerData, setPowerData] = useState([]);
    const [hours, setHours] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [total, setTotal] = useState(0);
    const [startDate, setStartDate] = useState(new Date('2023-07-15')); //date to select data from

    const getData = () => {
        const formattedDate = dayjs(startDate).startOf('day').format('YYYY-MM-DD HH:mm:ss');
        axios.get(`/DayPage?startDate=${formattedDate}`)
            .then(res => {
                console.log(res);
                let tempData = [];
                let tempTime = [];
                for (const dataObject of res.data) {
                    tempData.push(parseFloat(dataObject.total_power));
                    tempTime.push(dataObject.hour);
                }
                setPowerData(tempData);
                setHours(tempTime);
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
        getData();
    }, [startDate]);

    const handelStartDateChange = (date) => {
        setStartDate(new Date(date.toISOString().split('T')[0]));
    }

    return (
        <div>
            <div className="dayHeader">
                <h1>Day data</h1>
                <br></br>
                <p>Here you can select a date to see the total power recorded for each hour of that day. Please note that data collection started on July 10th and ended on July 24th so dates before or after this might not return any data</p>
            </div>
            <div className="BarContainer">
                {!loading && <DayBarChart powerData={powerData} label={hours}/>}
                <h2 className="wattageTotal">Total kW recorded for day: {(total / 1000).toFixed(2)}</h2>
                <Datepicker startDate={startDate} onStartDateChange={handelStartDateChange} />
            </div>
        </div>
    );
}

export default DayPage;