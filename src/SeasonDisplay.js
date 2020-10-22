import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
    winter : {
        text: 'Burr it is chilly',
        iconName: 'snowflake'
    },
    summer : {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    }
}

const getSeason = (lat, month) => {
    if ( month < 3 && month > 8 ){
        return lat > 0 ? 'winter' : 'summer'
    }else{
        return lat > 0 ? 'summer' : 'winter'
    }
}

export const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth)

 //   Bad Practice 
 //   const text = season === 'winter'? 'Burr, it is chilly' : 'Lets hit the beach'
 //   const iconName = season === 'winter'? 'snowflake' : 'sun' 
 
 //     Good Practice
    const { text, iconName } = seasonConfig[season]

    return (
        <div className = {` season-display ${season} `}>
            <i className = {` icon-left massive ${iconName} icon`} /> <br/>
            <h1 className = "comment"> { text } </h1><br/>
            <i className = {` icon-right massive ${iconName} icon`} />

        </div>
    )
}
