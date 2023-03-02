import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            }
        }
        // console.log('Child - constructor');
    }
    async componentDidMount() {
        this.timer = setInterval(() => {
            // console.log("Hello");
        }, 1000)
        // console.log("Child - componentDidMount");
    }
 
    componentDidUpdate() {
        // console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        // console.log("componentWillUnmount")
    }
    render () {
        const {count} = this.state;
        console.log('Child - render');
        return (
        <div>
            <h1>Class component</h1>
            <img src={this?.state?.userInfo?.avatar_url}/>
            <h2>Name: {this?.state?.userInfo?.name}</h2>
            <h2>Location: {this?.state?.userInfo?.location}</h2>
        </div>
        )
    }
};

/**
 * Child constructor
 * Child render
 * Child componentDidMount
 * 
 * API CALL
 * Set State
 * Child render
 * Child componentDidUpdate
 */

export default Profile;