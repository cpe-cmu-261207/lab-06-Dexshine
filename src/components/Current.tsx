import { useEffect, useState } from "react"
import axios from "axios"

type Price = {
    time: {
        updated: string;
    }
    bpi: {
        THB: {
            rate: string
        }
    }
}

const Current = () => {
    const [price, setPrice] = useState<Price | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const fetchPrice = async () => {
        try{
            const resp = await axios.get<Price>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
            console.log(resp.data)
            setPrice(resp.data)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            setError(true)
        }
    }
    useEffect(() => {
        fetchPrice()
    }, [])
    const render = () => {
        if(loading) return (
            <p className='text-2xl'>Loading ...</p>
        )
        else if(error) return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        else return (
            <div>
                <p className='text-2xl'>{price?.bpi.THB.rate.toLocaleString()} THB</p>
                <p> (Last updated  {price?.time.updated} )</p>
            </div>
        )
    }
    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            {render()}
        </div>
    )

}
export default Current