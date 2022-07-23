import React from 'react'
import Table from 'react-bootstrap/Table';

const CountryList = ({searchingCountries}) => {
  return (
    <Table striped bordered hover responsive className='mt-5'>
    <thead>
      <tr>
        <th>No</th>
        <th>Flag</th>
        <th>Country Name</th>
        <th>Capital</th>
        <th>Region</th>  
      </tr>
    </thead>
    <tbody>
      {searchingCountries.length === 0 ? <tr className='text-center m-1'><td colSpan={5}>Not Found...</td></tr>: searchingCountries?.map((e,i)=>{
        return(
          <tr key={i}>
          <td>{i+1}</td>
          <td className='text-center'><img src={e.flags.png} alt={e.name} width="50rem" height="40rem"/></td>
          <td>{e.name}</td>
          <td>{e.capital}</td>
          <td>{e.region}</td>
        </tr>
        )
      })}
    </tbody>
  </Table>
  )
}

export default CountryList