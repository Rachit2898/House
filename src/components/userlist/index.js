import React from 'react'
import {
    Button,
    Table
  } from "react-bootstrap";

export default function propertyList (props){
 return(
  <>
  {props.propertyData.length ? (
    

    <Table className ="table" >
    <thead>
      <tr>
        <th> Name</th>
        <th>Property </th>
        <th>Size</th>
        
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.propertyData.map((property, i) => (
        <tr key={i}>
          <td>{property.Name}</td>
          <td>{property.Property}</td>
          <td>{property.Size}</td>
          
          <td>{property.Description}</td>
          <td>
            
              <Button variant="danger" onClick={props.deleProperty.bind(this,i)}>Delete</Button>
              
            
          </td>
        </tr>
      ))}
    </tbody>
  </Table>)
  :(
    <div> no data</div>
  )
}
  
</>
 )
}
