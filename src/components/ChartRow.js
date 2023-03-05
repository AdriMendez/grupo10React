import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.title}</td>
                    <td>{props.price}</td>
                    <td>{props.idArtist}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.idGenre}</td>
                </tr>
            )
    }
    
        

export default ChartRow;