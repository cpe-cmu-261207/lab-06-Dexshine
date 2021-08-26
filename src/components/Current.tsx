const Current = () => {
    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            <p className='text-2xl'>Loading ...</p>
            <p className='text-2xl'>{(999999999).toLocaleString()} THB</p>
            <p> (Last updated) </p>
        </div>
    )
}
export default Current