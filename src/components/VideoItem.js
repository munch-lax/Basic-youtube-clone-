/*import react from 'react'


const VideoItem = (props)=>{
    return(
    <div className='item'>
        
        <div className='ui right aligned container'>
        <img src={props.video.snippet.thumbnails.medium.url} className='ui small image'/>
        </div>
        <div className='content'>
            <div className='header'>{props.video.snippet.title}</div>
        </div>
    </div>
    )

};

export default VideoItem*/


import react from 'react'


const VideoItem = (props)=>{
    




    return(
    <div onClick={()=>props.onvideoclick(props.video)} className='item'style={{width:180,position:'relative',left:1030,top:-100, padding:15,backgroundColor:'#EDF3F3'}}>
        
        <div className='ui right aligned container' >
        <img src={props.video.snippet.thumbnails.medium.url} className='ui image'/>
        </div>
        <div className='content' >
            <div className='container' style={{fontSize:11,fontFamily:'Arial',padding:2 , borderColor:'grey',borderWidth:10}}>{props.video.snippet.title}</div>
        </div>
        
    </div>
    )

};

export default VideoItem