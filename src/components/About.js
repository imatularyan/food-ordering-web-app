import {Outlet} from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './ProfileClass';
import {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent - constructor")
    }
    async componentDidMount() {
        // Best place to call an API
        //  console.log("Parent - componentDidMount");
    }
    render() {
        // Best place to make an API call
        // console.log("Parent - render");
        return(
            <div className='about'>
                <h1>About us page</h1>
                <p>This is an About Page!</p>
                <Profile/>
            </div>
        )
    }
};

/**
 * Parent Constructor
 * Parent Render
 *      First child constructor
 *      First child render
 *      Second child constructor
 *      Second child render
 * 
 *      DOM UPDATED for children
 * 
 *      First child compenentDidMount
 *      Second child componentDidMount
 * Parent ComponentDidMount
 */


export default About;