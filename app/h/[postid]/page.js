import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import Pay from "@/components/Pay";
import Posts from "@/components/Posts";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center  ">
      <div className=" flex gap-5 w-[80%]  my-5">
        <div className="flex flex-col gap-2 w-3/4 items-center justify-center bg-slate-900 p-4 rounded-lg">
          <h1 className="text-2xl  font-bold ">
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
          </h1>

          <Image
            src="/fire.webp"
            width={600}
            height={300}
            alt="fund raiser image"
            className="w-full h-[25rem] object-cover rounded-lg "
          />
          <div className="w-full flex items-center gap-2">
            <div className="bg-slate-700 w-[3.5rem] h-[3.5rem] ml-2 rounded-full"></div>
            <div>
              <h1 className="text-lg font-bold">Sama sdkssjd</h1>
              <h4 className="text-sm">Organiser</h4>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 flex flex-col gap-2 rounded-lg p-4 w-2/4 ">
          <h1 className="text-sm">
            <span className="font-bold text-xl "> Rs 9850405 </span>raised of Rs
            10507860
          </h1>
          <h4 className="text-sm">2000 donations</h4>
          <a
            href="#donate"
            className="bg-green-600 hover:bg-green-500 px-3 py-2 rounded-lg  text-lg text-center font-bold"
          >
            Donate now
          </a>
          <div className="flex  self-center gap-5">
            <a href="#">
              <FaXTwitter size={20} />
            </a>
            <a href="#">
              <AiFillInstagram size={20} />
            </a>
            <a href="#">
              <FaFacebookSquare size={20} />
            </a>
          </div>

          <h2 className="text-xl mt-2 font-semibold">Recent donations</h2>
          <div className=" h-full flex flex-col gap-2 pl-2 ">
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
              <div>
                <h2>Sasdsd oweoe</h2>
                <h4 className="text-xs">Rs 500</h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
              <div>
                <h2>Sasdsd oweoe</h2>
                <h4 className="text-xs">Rs 500</h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
              <div>
                <h2>Sasdsd oweoe</h2>
                <h4 className="text-xs">Rs 500</h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
              <div>
                <h2>Sasdsd oweoe</h2>
                <h4 className="text-xs">Rs 500</h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
              <div>
                <h2>Sasdsd oweoe</h2>
                <h4 className="text-xs">Rs 500</h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
              <div>
                <h2>Sasdsd oweoe</h2>
                <h4 className="text-xs">Rs 500</h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full bg-slate-700 "></div>
              <div>
                <h2>Sasdsd oweoe</h2>
                <h4 className="text-xs">Rs 500</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] bg-slate-900 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Message from Organiser</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          fugit quae a debitis ipsam saepe consectetur magni voluptate sint
          dolore asperiores distinctio sunt iure blanditiis modi error, ducimus
          alias neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur doloribus nulla quaerat enim, minus laboriosam commodi error
          iure hic. Voluptates repellat quidem ipsum eos omnis tempore rem,
          nesciunt soluta maiores mollitia magnam nemo. Fuga molestiae aliquam
          inventore expedita nobis corporis deserunt aut impedit necessitatibus?
          Laudantium veniam quos porro, ipsa consectetur unde esse praesentium
          maxime nisi. Soluta consequatur reprehenderit officia facilis earum
          voluptatibus incidunt ipsam distinctio temporibus atque non deserunt
          ipsa dignissimos vitae tenetur provident suscipit quas, iste, ipsum
          dolorum reiciendis quae? Consequuntur quaerat aliquid nemo non vitae
          dolore facilis libero eaque earum iusto sequi, velit neque
          praesentium, cumque ut iste.
        </p>
      </div>

      <div id="donate" className="w-[80%]">
        <Pay />
      </div>

      <div className="w-[80%]">
        <Posts />
      </div>
    </div>
  );
};

export default page;
