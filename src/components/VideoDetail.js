import react from 'react'


const VideoDetail = ({video}) =>{

    

    if(!video){
        return <div>Loading</div>
    }
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
    <div style={{position:'relative',top:-450}} >
        <div className='ui embed' style={{position:'relative',top:-370}}>
            <iframe src={videosrc} />

        </div>

        <div className='ui segment' style={{borderWidth:2,borderStyle:'solid', position:'relative',top:-370}}> 
        
        <h4 style={{fontSize:14}}>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div> 
    
    
    </div>)
}


export default VideoDetail