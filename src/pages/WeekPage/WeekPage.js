import React, {useEffect, useState} from "react";
import WeekPieChart from "../../components/Charts/WeekPieChart";
import axios from 'axios';
import './weekpage.css';


const WeekPage = () => {
    const [powerData, setPowerData] = useState([]);
    const [date, setDate] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [total, setTotal] = useState(0);

    const getData = () => {
        axios.get("/WeekPage")
            .then(res => {
                console.log(res);
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
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="PieContainer">
          {!loading && <WeekPieChart powerData={powerData} dates={date} />}
            <h2 className="wattageTotal">Total watts for week: {total}</h2>
        </div>
    );
}

export default WeekPage;