import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Sppiner';
import Clock from './Clock';


class App extends React.Component {
    state= {latitude: null, ermsg:''}; 

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude: position.coords.latitude}),
            (err) => this.setState({ermsg: err.message})
        );
    }  

    render(){ 
        
        if(this.state.latitude && !this.state.ermsg){
            return <div><h1>latitude: {this.state.latitude}<br/><Clock/></h1>
            <SeasonsDisplay latitude={this.state.latitude}/></div>;
        } else if(!this.state.latitude && this.state.ermsg){
            return <div>error: {this.state.ermsg}</div>;
        }

        return <Spinner />;
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'));
