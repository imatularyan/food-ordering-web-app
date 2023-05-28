import { Component } from "react";
import pizza from "../assets/img/pizza.png";
import twitter from "../assets/img/twitter.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import { Link } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {}
  render() {
    return (
      <div className="h-screen">
        <div className="w-10/12 bg-orange-200 p-8 mx-auto mt-16 rounded-lg">
          <div className="flex w-full justify-between p-2">
            <div className=" basis-3/5">
              <h1 className=" text-3xl font-bold text-gray-800">About us</h1>
              <p className=" text-xl font-light text-gray-700 overflow-hidden break-words mt-3 ">
                Welcome to Eatup, where your cravings meet convenience! We are
                passionate about delivering a seamless dining experience right
                to your doorstep. With a diverse menu featuring delectable
                dishes from local favorites to international cuisines, we strive
                to satisfy your hunger with exceptional quality and prompt
                service. Join us on this flavorful journey and indulge in the
                joy of hassle-free online food ordering.
              </p>

              <div className=" text-lg mt-3 text-gray-800">
                Developer: <strong>{"<Atul Aryan />"}</strong>
              </div>
              <div className="">
                <div className="mt-3 flex gap-4 items-center w-fit shadow-md rounded-md bg-gray-50/50 p-4">
                  <div className="">
                    <img
                      width="130"
                      src="https://avatars.githubusercontent.com/u/47840940?v=4"
                      className=" rounded-full border-white border"
                    />
                  </div>
                  <Link to="https://github.com/imatularyan">
                    <img
                      className="hover:outline outline-offset-4 outline-white rounded-full hover:shadow-md duration-200 ease-in-out"
                      width="44"
                      src={github}
                    />
                  </Link>
                  <Link to="https://www.linkedin.com/in/atularyan">
                    <img
                      className="hover:outline outline-white hover:shadow-md rounded-full duration-200 ease-in-out"
                      width="52"
                      src={linkedin}
                    />
                  </Link>
                  <Link to="https://twitter.com/Imatularyan">
                    <img
                      className="hover:outline outline-white rounded-full duration-200 ease-in-out hover:shadow-md"
                      width="52"
                      src={twitter}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" basis-2/5">
              <img src={pizza} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
