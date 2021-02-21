import axios from 'axios'




const KEY='AIzaSyDGYy5TJCIHWyWKYen1JOK-t7BLkxGOa_E'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY

    }

}
);