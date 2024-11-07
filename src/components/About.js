import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-300 to-yellow-300 py-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg">Welcome to</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2 drop-shadow-lg">The World of</h1>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-8 drop-shadow-lg">
          Tasty & Fresh Food
        </h1>

        <div className="flex justify-center">
          <div className="w-80 md:w-96 lg:w-[30rem] p-4 transform transition duration-500 hover:scale-105">
            <img
              className="rounded-lg shadow-2xl border-4 border-orange-400 hover:opacity-90 transition-opacity duration-300 ease-in-out"
              src="https://cdn.pixabay.com/photo/2024/05/06/16/58/burger-8743791_640.jpg"
              alt="Delicious Burger"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <UserClass name={"Sumit Verma"} location={"Prayagraj"} />
        </div>
      </div>
    );
  }
}

export default About;
