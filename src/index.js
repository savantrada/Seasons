import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state= {latitude: 5}; 
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (err) => console.log(err)
        );
    }
    render(){ 
        

        return <div>
            latitude {this.state.latitude}
            </div>;
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'));
