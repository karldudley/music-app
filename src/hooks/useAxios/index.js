import { useEffect, useState } from 'react'
import axios from 'axios'


function useAxios(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {

        //NEW AXIOS METHOD
        const fetchStudents = async() => {
            try {
                const { data } = await axios.get(url)
                setData(data)
                setIsPending(false)
            } catch (error) {
                console.log(error)
            } 
        }
        //simulate data request taking half a second
        setTimeout(() => {
            fetchStudents();
        },500)
        

        //only fetch once when the website loads
    }, [url])

  return { data, setData, isPending}
}

export default useAxios;
