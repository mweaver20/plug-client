import React, {useEffect, useState} from "react";
import LineChart from "../../components/Charts/LineChart";
import axios from 'axios';
import './hourpage.css';

const HourPage = () => {
    const [powerData, setPowerData] = useState([]);
    const [loading, setLoading] = useState(true); 

    const getData = () => {
        axios.get("/HourPage")
            .then(res => {
                console.log(res);
                let tempData = [];
                for (const dataObject of res.data) {
                    tempData.push(parseFloat(dataObject.power));
                }
                setPowerData(tempData)
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
        </div>
    );
}

export default HourPage;