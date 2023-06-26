import { useState } from "react";
import arrowUp from "../assets/img/arrow-up.svg";
import arrowDown from "../assets/img/arrow-down.svg";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className=" my-2 rounded-md bg-gray-200 shadow-sm ">
      <button
        className="w-full"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <h3 className="font-medium text-base text-gray-800 p-4 flex justify-between">
          {title}{" "}
          {isVisible ? (
            <img width="20" src={arrowUp} />
          ) : (
            <img width="20" src={arrowDown} />
          )}{" "}
        </h3>
      </button>

      {isVisible && (
        <p className="text-gray-800 font-light bg-gray-100 px-4 pb-4 pt-2 shadow-sm rounded-b-md">
          {description}
        </p>
      )}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div className=" w-10/12 m-auto text-gray-900 min-h-screen p-8 ">
      <h1 className=" text-2xl font-normal p-2 text-center text-gray-800">
        Help
      </h1>
      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "about" ? "" : "about");
        }}
      />

      <Section
        title={"Team Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "team" ? "" : "team");
        }}
      />

      <Section
        title={"Careers"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "career" ? "" : "career");
        }}
      />
      <Section
        title={"Product"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === "product"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "product" ? "" : "product");
        }}
      />

      <Section
        title={"Details"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === "details"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "details" ? "" : "details");
        }}
      />
    </div>
  );
};

export default Help;
