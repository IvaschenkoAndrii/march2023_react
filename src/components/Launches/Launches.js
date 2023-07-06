import {useEffect, useState} from "react";
import {Launch} from "../Launch/Launch";

function Launches (){

    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value))
    },[])


    return (
        <div>
            {launches.filter(value => value.launch_year!=='2020').map((launch, id) => <Launch key={id} launch={launch}/>)}
        </div>
    )
}

export {Launches}
