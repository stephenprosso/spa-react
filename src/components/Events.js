import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faImage,
  faMoneyCheck,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";


class Events extends Component {

     state = {
       isLoading: false,
       invoices: [  ],
     };
     remove(Id) {
       let updatedInvoices = [...this.state.invoices].filter(i => i.Id !== Id);
       this.setState({ invoices: updatedInvoices });
     }
   
     async componentDidMount(){
       const response = await fetch('https://x3mivos7o8.execute-api.us-west-1.amazonaws.com/Dev');
       const body = await response.json();
       this.setState({invoices:body,isLoading:false});
   
     }
   
     render() {
       const isLoading = this.state.isLoading;
       const allInvoices = this.state.invoices;
   
       if (isLoading) return <div>Loading.....</div>;
   
       let invoices = allInvoices.map((invoice) => (
         <tr key={invoice.RecordId}>
           <td>{invoice.fname}</td>
           <td>{invoice.lname}</td>
           <td>{invoice.credType}</td>
           <td>{invoice.org}</td>
           <td>{invoice.time}</td>
           <td>{invoice.checkedin}</td>
           <td>{invoice.EventId}</td>
         </tr>
       ));
   
       return (
         <div className="container border border-secondary rounded center">
           <div className="row">
             <div className="col-12">
               <h4>Pending Invoices - BiggCloud</h4>
             </div>
           </div>
           <div className="row">
             <div className=".col-xs-12 center text-center">
               <Table dark responsive striped bordered hover>
                 <thead>
                   <tr>
                     <th>ID</th>
                     <th>First</th>
                     <th>Last</th>
                     <th>Cred Type</th>
                     <th>Time</th>
                     <th>Check In</th>
                     <th>Event Id</th>
                   </tr>
                 </thead>
                 <tbody>
                   {this.state.invoices.length === 0 ? (
                     <tr>
                       <td colSpan="9">The Pipper has been paid!</td>
                     </tr>
                   ) : (
                     invoices
                   )}
                 </tbody>
               </Table>
             </div>
           </div>
         </div>
       );
     }
   }
export default Events
