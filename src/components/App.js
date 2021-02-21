import react from 'react';
import SearchBar from "./SearchBar"
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

class App extends react.Component{
    state={videos:[],selectedvideo:null};
    request= async (term) =>{
        
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items})
    }

    onvideoselect= (video)=>{
        this.setState({selectedvideo:video})
    }
    

    render(){
        return (
            <div>

                <div className='ui container' style={{width:600,padding:10,position:'relative' ,left:-30}}>
                    <SearchBar submit={this.request}/>
                </div>
                <div>
                <VideoList onvideoselect={this.onvideoselect} videos={this.state.videos}/>
                </div>
                <div className='ui container 'style={{width:600,padding:10,position:'relative' ,left:-30}}> 
                    <VideoDetail video={this.state.selectedvideo}/>
                </div>



            </div>
        )
    };
}

export default App