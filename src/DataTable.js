/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';

class DataTable extends Component {

    
       
        
    
   

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.time}
                </td>
                <td>
                    {this.props.obj.quantity}
                </td>
                <td>
                    {this.props.obj.test}
                </td>
                <td>
                    {this.props.obj.reading}
                </td>
                <td>
                    {this.props.obj.amount}
                </td>
                <td>
               
                </td>
                
            </tr>
        );
    }
}

export default DataTable;