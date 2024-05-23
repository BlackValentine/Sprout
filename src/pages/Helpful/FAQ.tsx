import React, { useState } from 'react';
import ChevronIcon from '../../assets/svg/chevron.svg';
import { Collapse } from 'react-collapse';
import FacebookIcon from '../../assets/svg/facebook.svg';
import TwitterXIcon from '../../assets/svg/twitterX.svg';
import LinkedinIcon from '../../assets/svg/linkedin.svg';
import CopyLink from '../../assets/svg/copy-link.svg';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isOpenGeneral1, setIsOpenGeneral1] = useState<boolean>(true);
  const [isOpenGeneral2, setIsOpenGeneral2] = useState<boolean>(false);
  const [isOpenGeneral3, setIsOpenGeneral3] = useState<boolean>(false);
  const [isOpenSettingUp1, setIsOpenSettingUp1] = useState<boolean>(true);
  const [isOpenSettingUp2, setIsOpenSettingUp2] = useState<boolean>(false);
  const [isOpenSettingUp3, setIsOpenSettingUp3] = useState<boolean>(false);

  return (
    <>
      <h1 className="text-[90px] font-forum text-center my-10">FAQ</h1>
      <div className="mx-10 bg-timberwolf text-gray2 pb-10">
        <h3 className="text-3xl font-forum text-center py-10">Frequently asked questions</h3>
        <div className="max-w-5xl flex items-center gap-6 mx-auto">
          <button className={activeTab === 0 ? 'text-orange' : 'text-gray2'} onClick={() => setActiveTab(0)}>
            General
          </button>
          <button className={activeTab === 1 ? 'text-orange' : 'text-gray2'} onClick={() => setActiveTab(1)}>
            Setting up FAQs
          </button>
        </div>
        {activeTab === 0 ? (
          <div className="max-w-5xl mx-auto mt-8">
            <div className="border-b border-solid border-orange">
              <div
                className="flex items-center justify-between cursor-pointer pb-5"
                onClick={() => {
                  setIsOpenGeneral1(!isOpenGeneral1);
                  setIsOpenGeneral2(false);
                  setIsOpenGeneral3(false);
                }}
              >
                <h6 className="text-2xl">What is an FAQ section?</h6>
                <img
                  src={ChevronIcon}
                  alt="chevron"
                  className={`${isOpenGeneral1 ? 'rotate-180' : 'rotate-0'} ease-linear duration-300`}
                />
              </div>
              <Collapse isOpened={isOpenGeneral1}>
                <p className="mb-4">
                  An FAQ section can be used to quickly answer common questions about your business like &#34;Where do
                  you ship to?&#34;, &#34;What are your opening hours?&#34;, or &#34;How can I book a service?&#34;.
                </p>
                <div className="flex items-center gap-4 pb-5">
                  <img src={FacebookIcon} alt="facebook" className="cursor-pointer" />
                  <img src={TwitterXIcon} alt="twitterX" className="cursor-pointer" />
                  <img src={LinkedinIcon} alt="linkedin" className="cursor-pointer" />
                  <img src={CopyLink} alt="copy" className="cursor-pointer" />
                </div>
              </Collapse>
            </div>
            <div className="border-b border-solid border-orange mt-6">
              <div
                className="flex items-center justify-between cursor-pointer pb-5"
                onClick={() => {
                  setIsOpenGeneral1(false);
                  setIsOpenGeneral2(!isOpenGeneral2);
                  setIsOpenGeneral3(false);
                }}
              >
                <h6 className="text-2xl">Why do FAQs matter?</h6>
                <img
                  src={ChevronIcon}
                  alt="chevron"
                  className={`${isOpenGeneral2 ? 'rotate-180' : 'rotate-0'} ease-linear duration-300`}
                />
              </div>
              <Collapse isOpened={isOpenGeneral2}>
                <p className="mb-5">
                  FAQs are a great way to help site visitors find quick answers to common questions about your business
                  and create a better navigation experience.
                </p>
                <div className="flex items-center gap-4 pb-5">
                  <img src={FacebookIcon} alt="facebook" className="cursor-pointer" />
                  <img src={TwitterXIcon} alt="twitterX" className="cursor-pointer" />
                  <img src={LinkedinIcon} alt="linkedin" className="cursor-pointer" />
                  <img src={CopyLink} alt="copy" className="cursor-pointer" />
                </div>
              </Collapse>
            </div>
            <div className="border-b border-solid border-orange mt-6">
              <div
                className="flex items-center justify-between cursor-pointer pb-5"
                onClick={() => {
                  setIsOpenGeneral1(false);
                  setIsOpenGeneral2(false);
                  setIsOpenGeneral3(!isOpenGeneral3);
                }}
              >
                <h6 className="text-2xl">What is an FAQ section?</h6>
                <img
                  src={ChevronIcon}
                  alt="chevron"
                  className={`${isOpenGeneral3 ? 'rotate-180' : 'rotate-0'} ease-linear duration-300`}
                />
              </div>
              <Collapse isOpened={isOpenGeneral3}>
                <p className="mb-5">
                  FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the
                  go.
                </p>
                <div className="flex items-center gap-4 pb-5">
                  <img src={FacebookIcon} alt="facebook" className="cursor-pointer" />
                  <img src={TwitterXIcon} alt="twitterX" className="cursor-pointer" />
                  <img src={LinkedinIcon} alt="linkedin" className="cursor-pointer" />
                  <img src={CopyLink} alt="copy" className="cursor-pointer" />
                </div>
              </Collapse>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto mt-8">
            <div className="border-b border-solid border-orange">
              <div
                className="flex items-center justify-between cursor-pointer pb-5"
                onClick={() => {
                  setIsOpenSettingUp1(!isOpenSettingUp1);
                  setIsOpenSettingUp2(false);
                  setIsOpenSettingUp3(false);
                }}
              >
                <h6 className="text-2xl">How do I add a new question & answer?</h6>
                <img
                  src={ChevronIcon}
                  alt="chevron"
                  className={`${isOpenSettingUp1 ? 'rotate-180' : 'rotate-0'} ease-linear duration-300`}
                />
              </div>
              <Collapse isOpened={isOpenSettingUp1}>
                <p>To add a new FAQ follow these steps:</p>
                <ol className="mb-5 list-decimal ml-4">
                  <li>Manage FAQs from your site dashboard or in the Editor</li>
                  <li>Add a new question & answer</li>
                  <li>Assign your FAQ to a category</li>
                  <li>Save and publish.</li>
                </ol>
                <p className="mb-5">You can always come back and edit your FAQs.</p>
                <div className="flex items-center gap-4 pb-5">
                  <img src={FacebookIcon} alt="facebook" className="cursor-pointer" />
                  <img src={TwitterXIcon} alt="twitterX" className="cursor-pointer" />
                  <img src={LinkedinIcon} alt="linkedin" className="cursor-pointer" />
                  <img src={CopyLink} alt="copy" className="cursor-pointer" />
                </div>
              </Collapse>
            </div>
            <div className="border-b border-solid border-orange mt-6">
              <div
                className="flex items-center justify-between cursor-pointer pb-5"
                onClick={() => {
                  setIsOpenSettingUp1(false);
                  setIsOpenSettingUp2(!isOpenSettingUp2);
                  setIsOpenSettingUp3(false);
                }}
              >
                <h6 className="text-2xl">Can I insert an image, video, or GIF in my FAQ?</h6>
                <img
                  src={ChevronIcon}
                  alt="chevron"
                  className={`${isOpenSettingUp2 ? 'rotate-180' : 'rotate-0'} ease-linear duration-300`}
                />
              </div>
              <Collapse isOpened={isOpenSettingUp2}>
                <p>Yes. To add media follow these steps:</p>
                <ol className="mb-5 list-decimal ml-4">
                  <li>Manage FAQs from your site dashboard or in the Editor</li>
                  <li>Create a new FAQ or edit an existing one</li>
                  <li>From the answer text box click on the video, image or GIF icon</li>
                  <li>Add media from your library and save.</li>
                </ol>
                <div className="flex items-center gap-4 pb-5">
                  <img src={FacebookIcon} alt="facebook" className="cursor-pointer" />
                  <img src={TwitterXIcon} alt="twitterX" className="cursor-pointer" />
                  <img src={LinkedinIcon} alt="linkedin" className="cursor-pointer" />
                  <img src={CopyLink} alt="copy" className="cursor-pointer" />
                </div>
              </Collapse>
            </div>
            <div className="border-b border-solid border-orange mt-6">
              <div
                className="flex items-center justify-between cursor-pointer pb-5"
                onClick={() => {
                  setIsOpenSettingUp1(false);
                  setIsOpenSettingUp2(false);
                  setIsOpenSettingUp3(!isOpenSettingUp3);
                }}
              >
                <h6 className="text-2xl">How do I edit or remove the &#39;Frequently Asked Questions&#39; title?</h6>
                <img
                  src={ChevronIcon}
                  alt="chevron"
                  className={`${isOpenSettingUp3 ? 'rotate-180' : 'rotate-0'} ease-linear duration-300`}
                />
              </div>
              <Collapse isOpened={isOpenSettingUp3}>
                <p>You can edit the title from the FAQ &#39;Settings&#39; tab in the Editor.</p>
                <p className="mb-5">
                  To remove the title from your mobile app go to the &#39;Site & App&#39; tab in your Owner&#39;s app
                  and customize.
                </p>
                <div className="flex items-center gap-4 pb-5">
                  <img src={FacebookIcon} alt="facebook" className="cursor-pointer" />
                  <img src={TwitterXIcon} alt="twitterX" className="cursor-pointer" />
                  <img src={LinkedinIcon} alt="linkedin" className="cursor-pointer" />
                  <img src={CopyLink} alt="copy" className="cursor-pointer" />
                </div>
              </Collapse>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
