import './SeasonDisplay.css';
import React from 'react';

const GetSeason = (lat,month) =>{
if(month > 2 && month <9){
    // eslint-disable-next-line no-unused-expressions
    return lat > 0 ? 'summar' : 'winter';
}else{
    return lat > 0 ? 'winter' : 'summar';
}
}

const SeasonsDisplay = props => {
const season = GetSeason(props.latitude,new Date().getMonth());
const display =
 season === 'winter' ? <i className="icon-right large snowflake icon"></i> : <i className="icon-left massive sun icon"></i>
    
return <div>
    <h1>
    {display}<br/>
    current season is {season}<br/>
    {display}
    </h1>
</div>;
}

export default SeasonsDisplay;