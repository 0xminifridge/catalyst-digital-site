import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div class="md:h-[100vh] bg-gray-900">
        <div class="flex justify-center flex-col text-center">
          <h1 class="text-3xl text-white m-auto my-4">Contact Us</h1>
          <p class="text-xl text-gray-500 m-auto">
            Please contact us by phone or email to request our services and for
            a free consultation.
          </p>
          <div class="flex flex-row flex-wrap m-auto justify-center text-white">
            <div class="text-left m-4 w-[350px] h-[400px] block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Office
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                <span>901 N Pollard St,</span>
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                <span>Arlington, VA 22203</span>
              </p>
            </div>

            <div class="text-left m-4 w-[350px] h-[400px] block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Contact
              </h5>
              <p class="flex flex-row items-center font-normal text-gray-700 dark:text-gray-400">
                <FaEnvelope />
                <a
                  class="hover:underline hover:text-cd-green"
                  href="mailto:CatalystDigital3000@gmail.com"
                >
                  <span class="pl-2">CatalystDigital3000@gmail.com</span>
                </a>
              </p>
              <p class="flex flex-row items-center font-normal text-gray-700 dark:text-gray-400">
                <FaPhone />
                <span class="pl-2">214-906-1893</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
