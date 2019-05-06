import React from 'react';
import H2Style from '../style/H2Style';
import H3Style from '../style/H3Style';
import PStyle from '../style/PStyle';

const Certificates = props => {
    return ( 
        <div className="Certificates">
            <H2Style name="Certificates" />
            <div className="Certificates-container">
                {props.data.map((cert, index) => (
                    <div className="Certificates-item" key={`Cert-${index}`}>
                        <H3Style>{cert.name}</H3Style>
                        <PStyle name={`${cert.date} - ${cert.description}`} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Certificates;