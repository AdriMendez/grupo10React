import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.title}</td> 
                    <td>{props.idGenre}</td>
                    <td>{props.year}</td>
                    <td>{props.price}</td>
                    <td>{props.company}</td>
                   
                </tr>
            )


    }
    
        

export default ChartRow;