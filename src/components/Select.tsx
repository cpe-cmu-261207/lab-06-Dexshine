import { useHistory} from "react-router-dom"
import { useState } from "react"

const Select = () => {
    
    const [startDate, setStart] = useState<string | null>(null)
    const [endDate, setEnd] = useState<string | null>(null)
    let history = useHistory()

    const submitDate = () => {
        const alertText = `Please select start date and end date correctly`
        if(startDate == null || endDate == null) alert(alertText)
        else{
            const start = startDate.split("-")
            const end = endDate.split("-")
            const startYear = parseInt(start[0])
            const endYear = parseInt(end[0])
            const startMonth = parseInt(start[1])
            const endMonth = parseInt(end[1])
            const startDay = parseInt(start[2])
            const endDay = parseInt(end[2])

            //check if start date < end date 
            //if not, send alert text
            if(startYear > endYear) alert(alertText)
            else{
                if(startMonth > endMonth) alert(alertText)
                else{
                    if(startDay > endDay) alert(alertText)
                    //change address bar
                    else history.push(`/history/result?start=${startDate}&end=${endDate}`)
                }
            }
        }
    }
    return (
        <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => setStart(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => setEnd(e.target.value)}></input>
            <br />
            <button onClick={() => submitDate()}>Get data</button>
        </div>
    )
}
export default Select