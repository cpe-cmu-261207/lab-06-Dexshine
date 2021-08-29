import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"

const Result = () => {
    type HistoryPrice = {
        bpi: Record<string, number> | null;
    }

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [oldprice, setOldprice] = useState<HistoryPrice | null>(null)
    //useLocation() : return current URL
    let query = new URLSearchParams(useLocation().search)
    console.log(useLocation())
    const start = query.get("start")
    console.log(start)
    const end = query.get("end")
    console.log(end)

    useEffect(() => {
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${start}&end=${end}`)
            .then(resp => {
                setOldprice(resp.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError(true)
            })
    }, [])

    const render = () => {
        //fetch still loading
        if(loading) {return(
            <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    <p className='text-2xl'>Loading....</p>
            </div>
        //cant fetch
        )}else if(error){
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
                </div>
            )
        //fetch successful
        }else{
            type Bpi = {
                key: string;
                value: number
            }
            //create array of object that have Bpi type
            const arrBpi: Array<Bpi> = []
            if(oldprice?.bpi) {
                //loop all object in oldprice.bpi
                for(const [key, value] of Object.entries(oldprice?.bpi)){
                    arrBpi.push({key,value})
                }
            }

            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    <p className='text-xl font-semibold'> ( From {start} To {end})</p>
                    <ul>
                        {
                            arrBpi.map(bpi => <li className='text-xl'>{bpi.key} - {bpi.value.toLocaleString()} THB</li>)
                        }
                    </ul>
                </div>
            )
        }

        
    }
    return (
        <div>
            {render()}
        </div>
    )
}
export default Result