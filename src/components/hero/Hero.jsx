import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeroMain from "./HeroMain";
// import zkliquid from "../../assets/zkliquidLogo.svg";
import zkliquidDashboard from "../../assets/zkliquidDashboard.png";

export default function Hero() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setExpanded(false);
    }
  }, [isLargeScreen]);

  return (
    <div className="overflow-x-hidden ">
      <header className="py-4 md:py-6" x-data="{expanded: false}">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
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

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-teal-400"
                onClick={toggleExpanded}
              >
                {!expanded ? (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </button>
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                <span
                  style={{ display: !expanded ? "block" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span
                  style={{ display: expanded ? "block" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a
                href="#"
                title=""
                className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Pricing{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Automation{" "}
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Customer Login{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-2  text-base font-bold leading-7 text-black transition-all duration-200 bg-teal-400 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Launch App
              </a>
            </div>
          </div>

          {expanded && (
            <nav x-show="expanded" x-collapse>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Features{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Pricing{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Automation{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Customer Login{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Launch App
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="pt-12 sm:pt-16 ">
        {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Turn your visitors into profitable
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> business </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get more customers
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                role="button"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Watch free demo
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500 font-inter">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div> */}
        <HeroMain />

        <div className="pb-12 ">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 "></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                {/* <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt=""
                /> */}
                <img
                  className="transform scale-110 "
                  src={zkliquidDashboard}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
