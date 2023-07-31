import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                        Đối tác gia công phần mềm <br />và dịch vụ số OV Software
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        Tập trung phát triển sản phẩm chất lượng cao. Tạm biệt nỗi đau kỹ thuật sáo rỗng bằng một vài dịch vụ của chúng tôi.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                        Dịch vụ
                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                        Dự án
                        </button>
                        
                    </div>

                    <Image src={'/images/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
