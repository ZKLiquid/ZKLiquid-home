import React from "react";

import zkliquid from "../../assets/zkliquid.svg";
// import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
// import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="py-4  sm:pt-4 lg:pt-4 ">
      {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"> */}
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between mt-14 lg:mt-24">
          <div className="flex-shrink-0">
            <a
              href="#"
              title=""
              className="flex rounded items-center outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 font-bold text-xl gap-1 text-teal-400"
            >
              <div>
                <svg
                  className="w-auto h-8 text-teal-400"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6118 57.0863C26.7649 57.3005 26.844 57.5587 26.8371 57.8219C26.8303 58.085 26.7379 58.3388 26.5739 58.5447C26.4099 58.7507 26.1832 58.8975 25.9283 58.9631C25.6733 59.0287 25.4039 59.0094 25.1609 58.9081C18.5882 56.1209 10.9082 50.0881 10.9082 39.7027C10.9082 26.9772 23.5955 22.1227 26.6991 12.2063C27.7166 9.09389 28.1962 5.8308 28.1173 2.55722C28.1118 2.36894 28.1658 2.18371 28.2717 2.02794C28.3776 1.87217 28.53 1.75381 28.7071 1.68972C28.8843 1.62564 29.0771 1.61911 29.2582 1.67106C29.4392 1.72301 29.5993 1.83079 29.7155 1.97904C33.3342 6.46171 35.403 11.9963 35.6118 17.7536C36.0209 26.5245 26.6337 33.5718 23.5355 40.6627C20.7482 47.1481 23.9718 53.4318 26.6118 57.0863Z"
                    fill="currentColor"
                  />
                  <path
                    d="M49.1049 51.8003C49.1049 52.9462 48.6497 54.0451 47.8394 54.8554C47.0291 55.6656 45.9302 56.1209 44.7843 56.1209C43.6384 56.1209 42.5394 55.6656 41.7292 54.8554C40.9189 54.0451 40.4637 52.9462 40.4637 51.8003C40.4647 51.4543 40.5104 51.11 40.5995 50.7757L34.131 47.5538C33.339 48.2989 32.2927 48.7139 31.2053 48.7142C30.0595 48.7142 28.9605 48.259 28.1502 47.4487C27.34 46.6384 26.8848 45.5395 26.8848 44.3936C26.8848 43.2477 27.34 42.1487 28.1502 41.3385C28.9605 40.5282 30.0595 40.073 31.2053 40.073C32.2927 40.0733 33.339 40.4883 34.131 41.2334L40.5995 38.0115C40.5104 37.6772 40.4647 37.3328 40.4637 36.9869C40.4637 36.1324 40.7171 35.297 41.1919 34.5865C41.6666 33.876 42.3414 33.3222 43.1309 32.9952C43.9204 32.6682 44.7891 32.5826 45.6272 32.7493C46.4653 32.916 47.2352 33.3275 47.8394 33.9318C48.4436 34.536 48.8551 35.3059 49.0218 36.144C49.1886 36.9821 49.103 37.8508 48.776 38.6403C48.449 39.4298 47.8952 40.1046 47.1847 40.5793C46.4742 41.0541 45.6388 41.3075 44.7843 41.3075C43.6969 41.3072 42.6506 40.8922 41.8586 40.1471L35.3901 43.369C35.571 44.0401 35.571 44.7471 35.3901 45.4182L41.8586 48.6401C42.6506 47.895 43.6969 47.48 44.7843 47.4797C45.9302 47.4797 47.0291 47.9349 47.8394 48.7452C48.6497 49.5554 49.1049 50.6544 49.1049 51.8003Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span>ZKLiquid</span>
            </a>
          </div>

          <ul className="flex items-center justify-center mt-8 space-x-6 sm:mt-12 sm:space-x-16 lg:mt-0">
            <li>
              <a
                to={"/engage-portal"}
                title="Engage Portal"
                className="text-lg font-medium  transition-all duration-200 font-pj "
              >
                {" "}
                Launch App
              </a>
            </li>

            <li>
              <a
                href="https://docs.audaxious.com/roadmap"
                title="Documentation"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium  transition-all duration-200 font-pj hover:text-gray-600"
              >
                {" "}
                Roadmap
              </a>
            </li>

            <li>
              <a
                href="https://docs.audaxious.com/"
                title="Documentation"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium  transition-all duration-200 font-pj hover:text-gray-600"
              >
                {" "}
                Docs
              </a>
            </li>

            <li>
              <a
                href="mailto:hello@audaxious.com"
                title="Email us"
                className="text-lg font-medium  transition-all duration-200 font-pj hover:text-gray-600"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Email Us
              </a>
            </li>
          </ul>
          <SocialMedia />
        </div>

        <hr className="my-8 border-black" />

        <div className="mt-10 md:flex md:items-center md:justify-between">
          <ul className="flex items-center justify-center space-x-6 md:order-2 md:justify-end">
            <li>
              <a
                href="#"
                title=""
                className="text-base font-normal transition-all duration-200 font-pj hover:opacity-70"
              >
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="text-base font-normal transition-all duration-200 font-pj hover:opacity-70"
              >
                {" "}
                Terms & Conditions{" "}
              </a>
            </li>
          </ul>

          <p className="mt-8 text-base font-normal text-center  md:text-left md:mt-0 md:order-1 font-pj">
            &copy; {new Date().getFullYear()}, All Rights Reserved by ZKLiquid
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
