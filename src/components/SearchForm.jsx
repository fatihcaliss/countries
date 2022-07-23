import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function SearchForm({ countries,setSearchingCountries}) {

    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState("all")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchKey = search[0].toUpperCase() + search.slice(1).toLowerCase();
        console.log(searchKey);
        if (searchList === "all") {     
            return setSearchingCountries(countries?.filter((e) => e["name"]?.includes(searchKey) || e["capital"]?.includes(searchKey) || e["region"]?.includes(searchKey)))
        }
        else if (searchList === "name") {
            return setSearchingCountries(countries?.filter((e) => e[searchList].includes(searchKey)))
        }
        else if (searchList === "capital") {
            console.log(searchList);
            return setSearchingCountries(countries?.filter((e) => e[searchList]?.includes(searchKey)))
        }
        else if (searchList === "region") {
            return setSearchingCountries(countries?.filter((e) => e[searchList]?.includes(searchKey)))
        }
    }
    return (
        <form className='d-flex flex-column gap-2 mt-5 m-auto' onSubmit={handleSubmit}>
            <Form.Label htmlFor="search" ><h2>Searching Form</h2></Form.Label>
            <Form.Control
                type="text"
                id="search"
                aria-describedby="search"
                placeholder='Type your searching'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
            />
            <Form.Select aria-label="Default select example" onChange={(e) => setSearchList(e.target.value)}
                required>
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="capital">Capital</option>
                <option value="region">Region</option>
            </Form.Select>
            <Button variant="primary" size="lg" type='submit'>
                Search
            </Button>
        </form>
    );
}

export default SearchForm;

// onChange={(e)=> handleFilter(e.target.value)}