import {useState, useEffect} from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // API CALL
        console.log("useEffect")
    });

    // console.log("render");
    return (
        <div className="about-profile">
            <h1>About Profile</h1>
            <h2>Name: {props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
};

export default Profile;