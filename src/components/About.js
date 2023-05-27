import { Component } from "react";
import pizza from "../assets/img/pizza.jpg";
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
        <div className="w-10/12 bg-orange-400/100 p-8 mx-auto mt-16 rounded-lg">
          <div className="flex w-full justify-between p-2">
            <div className=" basis-2/4 text-white">
              <h1 className=" text-3xl font-bold">About us</h1>
              <p className=" text-lg font-normal leading-7 overflow-hidden break-words mt-3">
                Welcome to Eatup, where your cravings meet convenience! We are
                passionate about delivering a seamless dining experience right
                to your doorstep. With a diverse menu featuring delectable
                dishes from local favorites to international cuisines, we strive
                to satisfy your hunger with exceptional quality and prompt
                service. Join us on this flavorful journey and indulge in the
                joy of hassle-free online food ordering.
              </p>
              <div className="mt-3 flex gap-2 items-center">
                <Link to="#">
                  <img
                    className="hover:outline outline-offset-4 outline-gray-50 rounded-full"
                    width="44"
                    src={github}
                  />
                </Link>
                <Link to="#">
                  <img
                    className="hover:outline outline-gray-50 rounded-full"
                    width="52"
                    src={linkedin}
                  />
                </Link>
                <Link to="#">
                  <img
                    className="hover:outline outline-gray-50 rounded-full"
                    width="52"
                    src={twitter}
                  />
                </Link>
              </div>
            </div>
            <div className=" basis-2/5">
              <img
                className=" shadow-md animate-pulse rounded-lg"
                src={pizza}
              />
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
