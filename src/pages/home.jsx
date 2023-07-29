import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: "linear-gradient(black, #E6E8EA)" }}
        className="via-zinc-600/20 flex h-screen w-screen flex-col items-center justify-center  overflow-hidden from-black to-black"
      >
        <div className="animate-glow from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 hidden h-px w-screen animate-fade-left bg-gradient-to-r md:block" />

        <h1 className="text-edge-outline l  z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl ">
          OV Team
        </h1>

        <div className="animate-glow from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 hidden h-px w-screen animate-fade-right bg-gradient-to-r md:block" />
        <div className="my-16 animate-fade-in text-center text-white ">
          <h2 className="text-zinc-500 text-sm ">
            Hi, my name is Andreas, I'm building serverless and open source
            solutions at <br />
            and working on at night.
          </h2>
        </div>
      </div>

      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4" style={{ backgroundImage: "linear-gradient(#bfc1c3, #ffff)" }}>
        <div className="container mx-auto">
          <PageTitle
            heading="Here are our heroes"
            style={{ marginBottom: "200px" }}
          >
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-6/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <ReactPlayer
                  config={{ file: { attributes: { preload: null } } }}
                  height="auto"
                  loop={true}
                  muted={true}
                  playing={true}
                  playsinline={true}
                  width="inherit"
                  url="https://res.cloudinary.com/dbuuhfoet/video/upload/v1690605248/5_rdvsey.mp4"
                />
              </Card>
            </div>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-6/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <ReactPlayer
                  config={{ file: { attributes: { preload: null } } }}
                  height="auto"
                  loop={true}
                  muted={true}
                  playing={true}
                  playsinline={true}
                  width="inherit"
                  url="https://res.cloudinary.com/dbuuhfoet/video/upload/v1690605248/5_rdvsey.mp4"
                />
              </Card>
            </div>
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 md:grid-cols-3">
            {teamData.map(({ img, name, position, socials,link }) => (
              <Link to={link}>
           
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
