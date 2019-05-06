import React from 'react';
import H2Style from '../style/H2Style';
import H3Style from '../style/H3Style';
import PStyle from '../style/PStyle';

const Education = props => {
    return ( 
        <div className="Education">
            <H2Style name="Education" />
            <div className="Education-container">
                {props.data.map((edu, index) => (
                    <div className="Education-item" key={`Edu-${index}`}>
                        <H3Style>{edu.degree} {edu.institution}
                            <span>{edu.starDate} - {edu.endDate}</span>
                        </H3Style>
                        <PStyle name={edu.description} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Education;