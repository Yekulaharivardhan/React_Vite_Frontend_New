import React from 'react';
import { Container } from 'react-bootstrap';

const TableComponent = ({data}) => {
    console.log(data,'datadatadatadatadata')
    return (
        <div>
            {data && <Container className='shadow p-4 rounded bg-light my-4'>
  <table className="table table-light table-striped rounded">
  <thead>
      <tr>
        <th>
          Title
        </th>
        <th>
          ID
        </th>
      </tr>
  </thead>
    <tbody>
  {data?.map(i=>{
    
    return(
  <tr>
  
          <td>{i.title}</td>
          <td>{i.id}</td>
  </tr>
  
  )})}
    </tbody>
  </table>
</Container>}
        </div>
    );
};

export default TableComponent;