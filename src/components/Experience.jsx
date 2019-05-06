import React from 'react';
import H2Style from '../style/H2Style';
import H3Style from '../style/H3Style';
import PStyle from '../style/PStyle';

const Experience = props => {
    return ( 
        <div className="Experience">
            <H2Style name="Experience" />
            <div className="Experience-container">
                {props.data.map((exp, index) => (
                    <div className="Experience-item" key={`Exp-${index}`}>
                        <H3Style>{exp.company}</H3Style>
                        <PStyle name={`${exp.startDate} - ${exp.endDate}, ${exp.jobTitle} - ${exp.jobDescription}`} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Experience;