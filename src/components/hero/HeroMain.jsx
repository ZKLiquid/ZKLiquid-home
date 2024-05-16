import { useState } from "react";
import { ConnectWallet } from "../../config/soroban-config";
import { requestAccess, setAllowed } from "@stellar/freighter-api";

export default function HeroMain() {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [connecting, setConnecting] = useState(false);

  async function handleConnect() {
    setConnecting(() => true);

    await ConnectWallet(setConnectedAccount, setSelectedNetwork);
    setConnecting(() => false);
  }
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-500 font-pj">
            Liquidity & Inter-Chain Messaging
          </h2>
          <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-100 font-pj">
            A ZK Omni liquidity protocol and interoperability messaging network
            connecting liquidity across siloed blockchains.
          </p>
        </div>

        <div className="relative max-w-lg mx-auto mt-14">
          <div className="absolute -inset-x-2 -inset-y-5">
            {/* <div
              className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div> */}
          </div>

          <div className="relative">
            <input
              type="email"
              name=""
              id=""
              placeholder="USDT/USDC amount"
              className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-gray-300 border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
              required
            />

            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 flex flex-row sm:items-center sm:pr-3 gap-[2px]">
              <button
                type="submit"
                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-1/2
                                    px-4
                                    py-4
                                    text-base
                                    font-bold
                                    text-black
                                    transition-all
                                    duration-200
                                    bg-teal-500
                                    border border-transparent
                                    sm:w-auto sm:py-3
                                    font-pj
                                    hover:bg-opacity-90
                                    rounded-l-xl
                                    transform 
                                    hover:translate-y-[-2px]
                                "
              >
                {/* Zk-EVM */}
                XLM
              </button>
              <button
                // type="submit"
                onClick={handleConnect}
                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-full
                                    px-8
                                    py-4
                                    text-base
                                    font-bold
                                    text-black
                                    transition-all
                                    duration-200
                                    bg-teal-500
                                    border border-transparent
                                    sm:w-[185px] sm:py-3
                                    
                                    font-pj
                                    hover:bg-opacity-90
                                    rounded-r-xl
                                    transform 
                                    hover:translate-y-[-2px]"
              >
                {connectedAccount.length === 0 ? "Connect Wallet" : "Deposit"}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm font-normal text-center text-gray-400 font-pj">
          {/* Participate in ZKLiquid by deligating USDT on supported networks.
           */}
          Participate in ZKLiquid on Soroban by depositing stable coins.
        </p>
      </div>
    </section>
  );
}
