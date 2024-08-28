import './App.css'

import {create} from "zustand";
import {useEffect} from "react";
const url = 'http://geek.itheima.net/v1_0/channels'
const useStore = create((set)=>{
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
})
const App = () => {
    const {fetchGetChannel,channelList} = useStore();
    useEffect(() => {
        fetchChannelList()
    }, []);
    return (
        <>
            <div>
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
