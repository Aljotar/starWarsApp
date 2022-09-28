import { height } from '@mui/system';
import Card from 'react-bootstrap/Card';
import { usePeople } from '../hook/usePeople';
import { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { PeopleData, PeopleResponse } from '../interface/people';
import { Button } from 'react-bootstrap';


export const PeopleList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [peopleList, setPeopleListt] = useState<PeopleData[]>([])
    const [pages, setPages] = useState(1)

    const url = `https://swapi.dev/api/people/?page=${pages}`;

    const loadPeople = async () => {
        setIsLoading(false);
        const resp = await classApi.get<PeopleResponse>(url);
        setPeopleListt(resp.data.results)
        setIsLoading(false)

    }
    useEffect(() => {
        loadPeople();
    }, [pages])

    const clickPagina = () => {
        setPages(pages - 1);
    };


    const anteriorDisabled = pages === 1;

    return (
        <>
            {
                peopleList.map((peopleList) => {
                    return (
                        <Card style={{ width: '25rem', height: '10rem' }}>
                            <Card.Body>
                                <Card.Title>{peopleList.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>{peopleList.height}</Card.Text>
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
