import './App.css'
import {create} from "zustand";
const useStore = create((set)=>{
    return {
        count:0,
        inc:()=>{
            set((state:any)=>({count:state.count + 1}))
        },

    }
})

const App = () => {
    const {count, inc} = useStore();
    return (
        <>
            <div>
                <button onClick={inc}>{count}</button>
            </div>
        </>
    )
}

export default App
