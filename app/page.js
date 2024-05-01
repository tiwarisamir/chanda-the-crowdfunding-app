import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col text-center text-white h-[90vh] p-5 w-3/4 mx-auto gap-10  ">
        <h2 className="font-bold text-9xl">Chanda</h2>

        <p className="text-xl">
          A Crowdfunding Platform for rasing fund for creators, relief fund,
          yourself, friends, family ,charity who wants to rase fund from fans,
          followers and people.
        </p>

        <div className="mt-3 flex gap-3 items-center">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            Start now
          </button>

          <a
            href="#"
            className="text-whitee text-lg font-semibold hover:text-blue-500 "
          >
            Read more...
          </a>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center ">
        <div className="w-5/6 mx-auto mb-3">
          <h1 className="text-white ml-5 text-2xl font-bold ">
            Discover fundraisers inspired by what you care about
          </h1>
        </div>
        <div className="glass p-5 w-5/6 mx-auto   bg-[#171738] rounded-xl flex gap-2">
          <div className=" w-2/4 rounded-xl overflow-hidden text-white p-3 ">
            <div className="relative ">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/game-development-max-600x300.webp"
                  width={600}
                  height={300}
                  alt="fund raiser image"
                  className="rounded-xl  cursor-pointer object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <h4 className="text-sm absolute bottom-3 bg-slate-500/15 px-2 rounded-full right-3">
                9000 donations
              </h4>
            </div>

            <div>
              <h1 className="text-xl font-bold my-3 cursor-pointer">
                Join us in making the first crowd-funded video game in our
                country
              </h1>

              <h4 className="text-lg">
                <strong>Organiser:</strong> Samir Tiwari
              </h4>
              <h4 className="text-lg">
                <strong> Organise for:</strong> Game development company
              </h4>
              <h4 className="text-xs text-green-500">Rs 90850 raised</h4>
            </div>
          </div>
          <div className="w-2/4 flex flex-wrap gap-1">
            <div className=" w-[16rem] h-[15rem]  rounded-xl overflow-hidden text-white   ">
              <div className="relative ">
                <div className="w-[15rem] overflow-hidden rounded-xl">
                  <Image
                    src="/gamer.webp"
                    width={600}
                    height={300}
                    alt="fund raiser image"
                    className="rounded-xl cursor-pointer object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <h4 className=" text-sm absolute bottom-3 bg-slate-500/50 px-2 rounded-full right-5">
                  9000 donations
                </h4>
              </div>

              <h1 className=" font-semibold my-1 text-sm cursor-pointer">
                Send love to Ghost the gamer
              </h1>
              <h4 className="text-xs text-green-500">Rs 90850 raised</h4>
            </div>
            <div className=" w-[16rem] h-[15rem]  rounded-xl overflow-hidden text-white   ">
              <div className="relative ">
                <div className="w-[15rem] overflow-hidden rounded-xl">
                  <Image
                    src="/cancer.webp"
                    width={600}
                    height={200}
                    alt="fund raiser image"
                    className="rounded-xl cursor-pointer object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <h4 className=" text-sm absolute bottom-3 bg-slate-500/50 px-2 rounded-full right-5">
                  9000 donations
                </h4>
              </div>

              <h1 className=" font-semibold my-1 cursor-pointer text-sm">
                Help Site to beat the cancer
              </h1>
              <h4 className="text-xs text-green-500">Rs 90850 raised</h4>
            </div>
            <div className=" w-[16rem] h-[15rem]  rounded-xl overflow-hidden text-white   ">
              <div className="relative ">
                <div className="w-[15rem] overflow-hidden rounded-xl">
                  <Image
                    src="/fire.webp"
                    width={600}
                    height={300}
                    alt="fund raiser image"
                    className="rounded-xl cursor-pointer object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <h4 className=" text-sm absolute bottom-3 bg-slate-500/50 px-2 rounded-full right-5">
                  9000 donations
                </h4>
              </div>

              <h1 className=" font-semibold my-1 cursor-pointer text-sm">
                Help Sahas family to rebuild their house which was destroyed by
                fire
              </h1>
              <h4 className="text-xs text-green-500">Rs 90850 raised</h4>
            </div>
            <div className=" w-[16rem] h-[15rem]  rounded-xl overflow-hidden text-white   ">
              <div className="relative ">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/charity.webp"
                    width={600}
                    height={300}
                    alt="fund raiser image"
                    className="rounded-xl cursor-pointer object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <h4 className=" text-sm absolute  bottom-3 bg-slate-500/50 px-2 rounded-full right-5">
                  9000 donations
                </h4>
              </div>

              <h1 className=" font-semibold my-1 cursor-pointer text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <h4 className="text-xs text-green-500">Rs 90850 raised</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen  flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="text-white text-5xl font-bold ">
            What can you do here?
          </h1>
        </div>
        <div className="text-white  flex flex-wrap gap-3 justify-around mt-10 w-3/4 ">
          <div className="text-center glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
            <Image
              src="/creator.webp"
              width={600}
              height={300}
              alt="fund raiser image"
              className=" rounded-full   object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
            />

            <p>
              You can donate money to your favorite creator and send message
              with donation.
            </p>
            <span className="hover:text-blue-500 cursor-pointer">
              Read more...
            </span>
          </div>
          <div className="text-center glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
            <Image
              src="/crowdfund.svg"
              width={600}
              height={300}
              alt="fund raiser image"
              className=" rounded-full    object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
            />
            <p>You can fund the crowd funded projects </p>
            <span className="hover:text-blue-500 cursor-pointer">
              Read more...
            </span>
          </div>
          <div className="text-center glass p-5 w-[15rem] flex flex-col items-center gap-3 ">
            <Image
              src="/charity.svg"
              width={600}
              height={300}
              alt="fund raiser image"
              className=" rounded-full    object-cover w-[10rem] h-[10rem] transition-transform duration-300 transform hover:scale-105"
            />
            <p>
              You cane donate money to charity to the people directly or throug
              foundation
            </p>
            <span className="hover:text-blue-500 cursor-pointer">
              Read more...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
