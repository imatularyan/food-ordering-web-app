import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
    }
    render() {
        return (
            <div className='w-3/5 m-auto min-h-screen'>
                <h1 className=' text-3xl font-bold text-zinc-900 text-center'>About us page</h1>
                <p>As an online food ordering website, we understand the importance of data in delivering a seamless and personalized experience to our users. Our platform utilizes advanced data analytics and machine learning algorithms to gather insights about our users' preferences and behaviors, allowing us to curate customized menus and offers that cater to their unique tastes and needs. We also collect data on our partner restaurants' performance and customer feedback, ensuring that we only offer the best quality food and service to our users. Additionally, we take data privacy and security seriously, implementing strict measures to safeguard our users' information and ensure compliance with regulations. With our data-driven approach, we strive to create a user-friendly and convenient food ordering experience that exceeds expectations.</p>
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