import React from 'react';


function ChartUser(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    
                </tr>
            )
    }
    
        

export default ChartUser;