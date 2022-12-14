import { Fragment } from "react";
import Footer from "../../Components/Layout/Landing/Footer";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Link } from "react-router-dom";

const GettingStartedThree = () => {
  return (
    <Fragment>
      <Nav />
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="py-24 text-center">
          <h2 className="max-w-4xl p-8 text-xl font-semibold">
            We would love to get some information about you.
            <br />
            This will only take a few minutes.
          </h2>
          <div>
            <Link to="/register">
              <button className="p-4 px-8 text-white bg-green-500 rounded hover:bg-green-600 animate">
                Let's Proceed
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default GettingStartedThree;
