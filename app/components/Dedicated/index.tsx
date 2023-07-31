import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/wework/team_2.jpg"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0"
              style={{ borderRadius: "20px" }}
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
            Luôn mang lại giá trị nhiều hơn mong đợi. 
            </h2>
            <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
              {" "}
              Le Di Dan, CEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
