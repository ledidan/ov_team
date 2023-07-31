export function ProfileDai() {
  return (
    <div class="p-24" style={{ marginBottom: "300px" }}>
      <div class="p-8 bg-white shadow mt-24">
        {" "}
        <div class="grid grid-cols-1 md:grid-cols-3">
          {" "}
          <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
          <div class="relative">
            <img
              class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
              src="/images/wework/team_3.png"
            />
          </div>{" "}
          <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button class="text-black py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>{" "}
            <button class="text-black py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              {" "}
              Message
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div class="mt-20 text-center border-b pb-12">
          {" "}
          <h1 class="text-4xl font-medium text-gray-700">
          Le Dai
          </h1>{" "}
          <p class="font-light text-gray-600 mt-3"> Ho Chi Minh</p>{" "}
          <p class="mt-8 text-gray-500">
          Currently Devops Technical Lead At Timo Bank
          </p>{" "}
       
          <p class="mt-2 text-gray-500">Admin at cloudyez.com</p>{" "}
        </div>{" "}
        <div class="mt-12 flex flex-col justify-center">
          {" "}
          <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button class="text-black py-5 px-10 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Github
            </button>{" "}
            <button class="text-black py-5 px-10 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              {" "}
              FaceBook
            </button>{" "}
            <button class="text-black py-5 px-10 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              {" "}
              Instargram
            </button>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProfileDai;