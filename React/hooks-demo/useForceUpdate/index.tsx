import { useState } from "react"

export default ()=>{
    const [value, setvalue] = useState<any>(false)
    return ()=>setvalue(!value)
}
