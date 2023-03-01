// import {Outlet} from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './ProfileClass';

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <Profile name={"atul"}/>
            <ProfileClass name={"aryan"}/>
        </div>
    )
};

export default About;