import { Switch, Route} from "react-router-dom"
import Result from "./Result"
const Select = () => {
    return (
        <Switch>
            <Route path='/'>
            <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <br />
            <button>Get data</button>
            </div>
            </Route>
            <Route path='/result'>
                <Result/>
            </Route>
        </Switch>
    )
}
export default Select