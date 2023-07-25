import React, {useEffect, useState} from "react";
import LineChart from "../../components/Charts/LineChart";
import axios from 'axios';
import './hourpage.css';

const HourPage = () => {
    const [powerData, setPowerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);

    const getData = () => {
        axios.get("/HourPage")
            .then(res => {
                console.log(res);
                let tempData = [];
                for (const dataObject of res.data) {
                    tempData.push(parseFloat(dataObject.power));
                }
                setPowerData(tempData);
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
        <div className="lineContainer">
            {!loading && <LineChart powerData={powerData} />}
            <h2 className="wattageTotal">Total watts for hour: {total}</h2>
        </div>
    );
}

export default HourPage;