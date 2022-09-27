import { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { PeopleData, PeopleResponse } from '../interface/people';

export const usePeople = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ peopleList, setPeopleListt ] = useState<PeopleData[]>([])
  
    const url = 'https://swapi.dev/api/people';

    const loadPeople = async() => {
        setIsLoading(true);
        const resp = await classApi.get<PeopleResponse>(url);
        setPeopleListt(resp.data.results)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadPeople();
    },[])

    return {
        peopleList,
        isLoading
    }
}