import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div class="bg-gray-900 h-[30vh]">
        <div class="pt-3 flex md:justify-start items-center h-full text-white text-left mx-10 md:mx-24">
          <div class="flex flex-col">
            <h1 class="font-medium text-xl md:text-4xl my-4">What We Do</h1>
            <h3 class="w-72">
              Build your Web3 goals through smart contracts and interactive
              Dapps
            </h3>
            <Link
              to={{ pathname: "/projects" }}
              class="w-56 flex flex-row items-center rounded-lg border-2 border-gray-800 px-4 py-2 my-4 text-sm md:text-lg font-medium hover:text-cd-green hover:border-cd-green"
            >
              <span class="px-4">See our work</span> <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
