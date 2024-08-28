import './App.css'

import {create} from "zustand";
import {useEffect} from "react";
const url = 'http://geek.itheima.net/v1_0/channels'
const createCount = (set)=>{
    return {
        count:0,
        inc:()=>{
            set((state:any)=>({count:state.count + 1}))
        },

    }
}
const createChannel = (set)=>{
    return {
        channelList:[],
        fetchChannelList: ()=>{
            fetch(url).then(res=>{
                res.json().then(res=>{
                    console.log(res)
                    set({channelList:res.data.channels})
                })
            })
        }
    }
}
const useStore = create((...a)=>{
    return {
        ...createChannel(...a),
        ...createCount(...a)
    }
})
const App = () => {
    const {count, inc,fetchChannelList,channelList} = useStore();
    useEffect(() => {
        fetchChannelList()
    }, []);
    return (
        <>
            <div>
                <button onClick={inc}>{count}</button>
                <ul>
                    {channelList.map((channel) => (
                        <div key={channel.id}>{channel.name}</div>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App
