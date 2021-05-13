import React, { Component } from 'react';

class DataTable1 extends Component {
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
                    {this.props.obj.amount}
                </td>
            </tr>
        );
    }
}

export default DataTable1;