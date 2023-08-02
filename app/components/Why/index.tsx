import Image from "next/image";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Xây dựng và thiết kế theo yêu cầu.",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Chi phí hợp lí, thanh toán minh bạch.",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Ứng dụng công nghệ mới nhất.",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Đội ngũ nhân viên chuyên nghiệp tại TP.HCM.",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Tư vấn hỗ trợ tận tình và miễn phí.",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 md:mb-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="lg:-ml-64">
            <Image
              src="/images/why/iPad.png"
              alt="iPad-image"
              width={4000}
              height={900}
            />
          </div>

          {/* COLUMN-2 */}
      
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              Chọn OV Software Vì...
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Dont waste time on search manual tasks. Let Automation do it for
              you. Simplify workflows, reduce errors, and save time.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src="/images/why/check.svg"
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
