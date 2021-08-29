import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { time } from "console"

type Params = {
    id: string
}
// type Time = {
//     updated: string;
//     updatedISO: string;
//     updateuk: string;
// }
// type code = {
//     code: string;
//     description: string;
//     rate: string;
// }
// type Bpi = {
//     THB: code[]
// }
// type PriceType = {
//     time: Time[];
//     disclaimer: string;
//     bpi: Bpi
// }
const Current = () => {
    const {id} = useParams<Params>()
    const [price, setPrice] = useState<string | null>(null)
    const [time, setTime] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const fetchPrice = async () => {
        try{
            const resp = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
            console.log(resp.data)
            const time = resp.data.time.updated
            const price = resp.data.bpi.THB.rate
            setPrice(price)
            setTime(time)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            setError(true)
        }
    }
    useEffect(() => {
        fetchPrice()
    })
    const render = () => {
        if(loading) return (
            <p className='text-2xl'>Loading ...</p>
        )
        else if(error) return <p>Error</p>
        else return (
            <div>
                <p className='text-2xl'>{price?.toLocaleString()} THB</p>
                <p> (Last updated  {time} )</p>
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