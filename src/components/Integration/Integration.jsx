import React from "react";
import chains from "../../assets/chains.png";

const Integration = () => {
  return (
    <section className="pt-10 pb-8 overflow-hidden  sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-teal-500 sm:text-4xl lg:text-4xl">
            Blockchain Support
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-100">
            Building support for over 10 blockchains. ZKLiquid intends to
            connect liquidity on EVM chains to non-EVM chains like Soroban,
            Polkadot and Solana.
          </p>
        </div>
      </div>

      <img
        className="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100"
        // src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png"
        src={chains}
        alt=""
      />
    </section>
  );
};

export default Integration;
