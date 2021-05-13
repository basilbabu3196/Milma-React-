import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import Home from './header'
export default class Purchase extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount(){
 
        axios.get("http://localhost:8000/getpurchase",{  withCredentials: true}).then(response=>{
          console.log(response);
          this.setState({ usersCollection: response.data.data });
        
        })
      }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (<div><Home></Home>
            <div className="wrapper-users">
            <center><h3 className="p-3 mb-2 bg-light text-success">PURCHASE DETAILS</h3></center>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>DATE/TIME</td>
                                <td>QUANTITY</td>
                                <td>TEST</td>
                                <td>READING</td>
                                <td>AMOUNT</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}