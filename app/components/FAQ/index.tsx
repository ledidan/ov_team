"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { FAQ_DATA } from "./constant";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
      style={{ marginBottom: 300 }}
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Các câu hỏi thường gặp ?
      </h2>
      <div className="w-full px-4 pt-16">
        {FAQ_DATA.map(({ question, answer }, index) => {
          return (
            <div key={index}  className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                      <span>{question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-xl px-4 pt-4 pb-2 text-black font-normal opacity-70">
                      {answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
