import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // Create State
        this.state= {
            count: 0,
            count2: 1
        };
        console.log('constructor');
    }
    render () {
        const {count} = this.state;
        console.log('render');
        return (
        <div>
            <h1>Class component</h1>
            <h2>Name: {this.props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                this.setState({
                    // WE DONOT MUTATE STATE DIRECTLY
                    // NEVER DO this.state.count = something
                    count: count + 1,

                })
            }}>Class button</button>
        </div>
        )
    }
};

export default Profile;