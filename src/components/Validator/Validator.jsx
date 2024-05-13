import Protocol from "../../assets/Protocol.svg";
export default function Validator() {
  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div>
            <img
              className="w-full max-w-md mx-auto "
              // src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png"
              src={Protocol}
              alt=""
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-teal-500 font-pj">
              Become a Network Validator
            </h2>
            <p className="mt-6 text-base text-gray-100">
              Run a validator node on ZKLiquid to participate in blockchain data
              syncing between different blockchains
            </p>

            <a
              href="https://docs.zkliquid.io/"
              title=""
              className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-full
                                    mt-9
                                    px-8
                                    py-4
                                    text-base
                                    font-bold
                                    text-black
                                    transition-all
                                    duration-200
                                    bg-teal-500
                                    border border-transparent
                                    sm:w-auto sm:py-3
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                    font-pj
                                    hover:bg-opacity-90
                                    rounded-xl
                                "
              role="button"
              target="_blank"
            >
              {" "}
              Deploy Validator Node
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
