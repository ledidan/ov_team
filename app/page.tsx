import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";
import Dedicated from "./components/Dedicated/index";
import Digital from "./components/Digital/index";
import Beliefs from "./components/Beliefs/index";
import Wework from "./components/Wework/index";
import Feedback from "./components/Feedback/index";
import Featured from "./components/Featured/index";
import Manage from "./components/Manage/index";
import FAQ from "./components/FAQ/index";
import Testimonials from "./components/Testimonials/index";
import Articles from "./components/Articles/index";
import Joinus from "./components/Joinus/index";
import Insta from "./components/Insta/index";
import Why from "./components/Why";
import Provide from "./components/Provide";
import Partners from "./components/Company";

export default function Home() {
  return (
    <main>
      <Banner />
      <Partners />
      <Provide />
      {/* <Aboutus /> */}
      <Dedicated />
      {/* <Digital /> */}
      <Why />
      
      <Beliefs />
      <Wework />
      <Feedback />
      <Featured />

      {/* <Manage /> */}
      <FAQ />
      {/* <Testimonials /> */}
      {/* <Articles /> */}
      {/* <Joinus /> */}
      {/* <Insta /> */}
    </main>
  );
}
