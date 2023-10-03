// import React, {useState} from "react"

// function Test(){
//  const [counter, setCounter]= useState(0)
//  const [formData, setFormData]=useState("")

//     function handleChange(event){
//        const value= event.target.value
//        setFormData(value)
//     }

//     function handleSubmit(event){
//         event.preventDefault()
//         const characterCount=formData.length
//         setCounter(counter+characterCount)
//         setFormData("")
//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={handleChange} type="text" value={formData}></input>
//                 <button>Click Me!</button>
//                 <p>{counter}</p>
//             </form>
//         </div>
//     )
// }

// export default Test