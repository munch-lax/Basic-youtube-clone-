import react from 'react'


class SearchBar extends react.Component{
state={term:''}

onSubmitClick= (event)=>{
    event.preventDefault()
    this.props.submit(this.state.term)
}
    render(){
        return(
            <div className="ui segment" style={{borderStyle:'solid',borderWidth:2}}>
                <form onSubmit={this.onSubmitClick} className="ui form" >
                    <div className="field" >
                        <label>Video Search</label>
                        <input type="text" placeholder="Search... and press enter " value={this.state.term} onChange={(event)=>{this.setState({term:event.target.value})}}/>
                        
                    </div>
                </form>
            </div>

        )

    }
}

export default SearchBar