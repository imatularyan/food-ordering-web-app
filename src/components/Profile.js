import {useState, useEffect} from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // API CALL
        const timer =setInterval(() => {
            console.log("hey");
        },1000)

        console.log("useEffect Called")

        return() => {
            clearInterval(timer);
            console.log("useEffect return")
        }

    },[]);

    console.log("render");
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