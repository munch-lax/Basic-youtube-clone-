import react from 'react'
import VideoItem from './VideoItem'

const VideoList = ({onvideoselect,videos}) =>{
    const renderdList=videos.map((video)=>{
        return<VideoItem onvideoclick={onvideoselect} video={video}/>

    })

    return(<div className='ui relaxed list' style={{cursor:'pointer' , backgroundColor:'#EDF3F3',width:0}}>{renderdList}</div>);

}

export default VideoList