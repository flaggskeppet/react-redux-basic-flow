import React from 'react'; 
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1>Pluralsight courses</h1>
                <p>React, redux and ES6</p>
                <a Link to="about" className="btn btn-primary btn-lg">Learn more</a>
            </div>
        );
    }
}

export default HomePage

