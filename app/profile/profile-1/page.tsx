

export function ProfilePhu() {
  return (
    <div className="p-24" style={{marginBottom:"300px"}}>
      <div className="p-8 bg-white shadow mt-24">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {" "}
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
         
        
          </div>
          <div className="relative">

           
             <img className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src="/images/wework/team_1.jpg"/>
           
          </div>{" "}
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-black py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">

              Connect
            </button>{" "}
            <button className="text-black py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              {" "}
              Message
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-20 text-center border-b pb-12">
          {" "}
          <h1 className="text-4xl font-medium text-gray-700">
            Nguyen Dang Phu
          </h1>{" "}
          <p className="font-light text-gray-600 mt-3">Tan Phu, Ho Chi Minh</p>{" "}
          <p className="mt-8 text-gray-500">
          Former SoftWare Engineer at FPT Software
          </p>{" "}
          <p className="mt-8 text-gray-500">
          Currently SoftWare Engineer At OV
          </p>{" "}
          <p className="mt-2 text-gray-500">FPT University</p>{" "}
        </div>{" "}
        <div className="mt-12 flex flex-col justify-center">
          {" "}
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-black py-5 px-10 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Github
            </button>{" "}
            <button className="text-black py-5 px-10 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              {" "}
              FaceBook
            </button>{" "}
            <button className="text-black py-5 px-10 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              {" "}
              Instargram
            </button>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProfilePhu;
