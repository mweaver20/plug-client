import React, {useEffect, useState} from "react";
import DayBarChart from "../../components/Charts/DayBarChart";
import axios from 'axios';
import './daypage.css';


const DayPage = () => {
    const [powerData, setPowerData] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [total, setTotal] = useState(0);

    const getData = () => {
        axios.get("/DayPage")
            .then(res => {
                console.log(res);
                let tempData = [];
                for (const dataObject of res.data) {
                    tempData.push(parseFloat(dataObject.total_power));
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
        <div className="BarContainer">
          {!loading && <DayBarChart powerData={powerData} />}
            <h2 className="wattageTotal">Total watts for day: {total}</h2>
        </div>
    );
}

export default DayPage;