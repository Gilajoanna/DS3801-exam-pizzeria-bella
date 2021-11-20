import React from 'react';

function Customize() {
    
    const [customize, setCustomize] = useState('')

    const handleSubmit = (e) => {
        customize ? setCustomizeError(false) : setCustomizeError (true)
        
        e.preventDefault() 
        if(customize) {
            setCustomizeError(false) 
            addCustomize(customize)
            history.goBack()
        }
    }
    
    return(
        <>

            

        </>
    )
}

export default Customize;