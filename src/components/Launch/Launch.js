function Launch ({launch}){

    const {flight_number,mission_name,launch_date_utc,launch_year} = launch

    return (
        <div>
            {flight_number} {mission_name} {launch_date_utc}  --  {launch_year}
        </div>
    )
}

export {Launch}
