import { Avatar, Typography, Button, Card, CardBody } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook ,BsInstagram} from "react-icons/bs";
export function ProfilePhu() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/team_2.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400">Conntect</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                   
                
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Lê Di Dan
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Go Vap, Ho Chi Minh
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Former SoftWare Engineer At Gaco
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                   Currently SoftWare Engineer At OV 
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Open University
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <a href="https://github.com/ledidan" target="_blank">

                      <Card className="rounded-2xl shadow-lg shadow-gray-500/10 ">
                        <CardBody className="flex items-center justify-center px-10 text-center  ">
                          <AiFillGithub style={{ marginRight: "10px",color: "black" }} />
                          GitHub
                        </CardBody>
                      </Card>
                    </a>
                      <a href="https://www.facebook.com/hightech.ov/" target="_blank">
                      <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="flex items-center justify-center px-10 text-center">
                        <BsFacebook style={{ marginRight: "10px" ,color: "#0a81ec"}} />

                          Facebook
                        </CardBody>
                       
                      </Card>
                      </a>
                      <a href="https://www.instagram.com/blackdouble.d/"><Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="flex items-center justify-center px-10 text-center ">
                        <BsInstagram  style={{ marginRight: "10px",color: "#be2c6e" }} />

                          Instagram
                        </CardBody>
                      </Card></a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default ProfilePhu;
