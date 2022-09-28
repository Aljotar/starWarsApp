import Card from 'react-bootstrap/Card';
import { useEffect, useState, ChangeEvent } from 'react';
import { classApi } from '../api/consultApi';
import { PeopleData, PeopleResponse } from '../interface/people';
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';



export const PeopleList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [peopleList, setPeopleListt] = useState<PeopleData[]>([])
    const [pages, setPages] = useState(1)
    const [searchPeople, setSearchPeople] = useState('')

    const url = `https://swapi.dev/api/people/?page=${pages}`;



    useEffect(() => {
        const loadPeople = async () => {
            setIsLoading(false);
            const resp = await classApi.get<PeopleResponse>(url);
            setPeopleListt(resp.data.results)
            setIsLoading(false)
        }
        loadPeople()
        const auxArray = peopleList.filter((peop) => {
            return peop.name.toLowerCase().includes(searchPeople.toLowerCase());
        })
        setPeopleListt(auxArray)
        
    }, [pages, searchPeople])

    console.log(peopleList)
    console.log(searchPeople)

    const handleChange = (event: any) => {
        setSearchPeople(event.target.value);
    };

    const clickPagina = () => {
        setPages(pages - 1);
    };


    const anteriorDisabled = pages === 1;

    return (
        <>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                />
            </InputGroup>
            {
                peopleList.map((peopleList) => {
                    return (
                        <Card className='cardStyle mb-3' style={{ width: '25rem', height: '10rem' }}>
                            <Card.Body>
                                <Card.Title>{peopleList.name}</Card.Title>
                                <Card.Text>{peopleList.species}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            <Button
                variant="outline-success"
                className="mx-5 m-5"
                onClick={clickPagina}
                disabled={anteriorDisabled}
            >
                Anterior
            </Button>
            <Button
                variant="outline-success"
                className="m-5"
                onClick={() => {
                    setPages(pages + 1);
                }}
                disabled={peopleList.length === 0}
            >
                Siguiente
            </Button>
        </>
    )
}
