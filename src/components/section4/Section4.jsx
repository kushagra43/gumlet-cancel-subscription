import React, { useState } from "react";
import logo2 from "../../assets/logo2.svg";
import vimeo from "../../assets/vimeo.svg";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import arrowdown from "../../assets/arrowdown.svg";

const Section4 = () => {

  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  }



  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-semibold">Gumlet vs Vimeo</h1>
        <div className="border-[2px] rounded-3xl border-[#E2E2E2] mt-12">
          <table className="bg-zinc-50 rounded-3xl text-sm">
            <tbody>

              <tr>
                <td className="p-3 md:p-5 md:px-10 px-3 text-xl md:text-2xl font-semibold">Features</td>
                <td className="p-3 md:p-5 md:px-10 px-3">
                  <img src={logo2} alt="" />
                </td>
                <td className="p-3 md:p-5 md:px-10 px-4">
                  <img src={vimeo} alt="" />
                </td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Pay for</td>
                <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 ">What you use</td>
                <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 ">Per seat</td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Billing</td>
                <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3">Transparent </td>
                <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3">Opaque </td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Glitchy videos</td>
                <td className="p-3 md:p-5 md:pl-24  md:pr-10 px-3">No </td>
                <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3">Frequently </td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Instant video start time</td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={tick} alt="" className="h-1/5 w-1/5 " />
                </td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={cross} alt="" className="h-1/5 w-1/5 " />
                </td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-6 border-r-2">
                  Ads based monetization (VAST Tags)
                </td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={tick} alt="" className="h-1/5 w-1/5 " />
                </td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={cross} alt="" className="h-1/5 w-1/5 " />
                </td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-6 border-r-2">360-degree analytics</td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={tick} alt="" className="h-1/5 w-1/5 " />
                </td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={cross} alt="" className="h-1/5 w-1/5 " />
                </td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">
                  Protection from illegal downloads & content piracy
                </td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={tick} alt="" className="h-1/5 w-1/5 " />
                </td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={cross} alt="" className="h-1/5 w-1/5 " />
                </td>
              </tr>

              <tr className="rounded-2xl border-t-2">
                <td className="p-3 md:p-5 md:px-10 px-6 border-r-2">24X7 Chat support</td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={tick} alt="" className="h-1/5 w-1/5 " />
                </td>
                <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                  <img src={cross} alt="" className="h-1/5 w-1/5 " />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center mt-12 mb-6">
          <div className=" flex flex-col justify-center items-center rounded-xl border-2 border-[#E2E2E2]">
            <h1 className="text-2xl text-center md:text-4xl font-bold md:p-8 md:px-40 p-3">
              Detailed Feature Comparison
            </h1>
            <img className="relative mb-[-20px] cursor-pointer" src={arrowdown} alt="" onClick={handleClick} />
          </div>
        </div>
        {
          showData &&
          <>
            <div className="border-[2px] rounded-3xl border-[#E2E2E2] mb-10">
              <table className="bg-zinc-50 rounded-3xl text-sm">
                <tbody>
                  <tr>
                    <td className="p-3 md:p-5 md:px-10 px-3 text-xl md:text-2xl font-semibold">Features</td>
                    <td className="p-3 md:p-5 md:px-10 px-3">
                      <img src={logo2} alt="" />
                    </td>
                    <td className="p-3 md:p-5 md:px-10 px-4">
                      <img src={vimeo} alt="" />
                    </td>
                  </tr>
                  <tr className="rounded-2xl">
                    <td className="p-3 md:p-5 md:px-10 px-3  border-t-2 font-semibold">Plan Comparison</td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 border-t-2 "></td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3  border-t-2"></td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Billing</td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3">Transparent </td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3">Opaque </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">One time upload limit</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Users</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">
                      Unlimited
                    </td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3">
                      Limited
                    </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">
                      Hidden streaming cap
                    </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">
                      No
                    </td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">
                      Yes
                    </td>
                  </tr>
                  <tr className="rounded-2xl">
                    <td className="p-3 md:p-5 md:px-10 px-3  border-t-2 font-semibold">Video Processing & Streaming</td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 border-t-2 "></td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3  border-t-2"></td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Netflix-grade compression with PTE</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Dev friendly experience</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Fail-proof video infrastructure</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">
                      Buffering instances
                    </td>
                    <td className="p-3 flex md:p-5 md:pl-20 md:pr-10 px-3">
                      No
                    </td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">
                      Frequent
                    </td>
                  </tr>
                  <tr className="rounded-2xl">
                    <td className="p-3 md:p-5 md:px-10 px-3  border-t-2 font-semibold">Player Customization & Branding &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 border-t-2 "></td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3  border-t-2"></td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Custom video pipelines</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Player branding</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes (Extensive) </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No (Limited) </td>
                  </tr>
                  <tr className="rounded-2xl">
                    <td className="p-3 md:p-5 md:px-10 px-3  border-t-2 font-semibold">Integrations</td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 border-t-2 "></td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3  border-t-2"></td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">APIs</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No (Limited) </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Zapier automation</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">Yes</td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Pabbly Connect</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Webhooks</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No</td>
                  </tr>
                  <tr className="rounded-2xl">
                    <td className="p-3 md:p-5 md:px-10 px-3  border-t-2 font-semibold">Video Protection</td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 border-t-2 "></td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3  border-t-2"></td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Signed URLs & access tokens</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">Yes </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Geo-blocking</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No</td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Digital Rights Management (DRM)</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>

                  <tr className="rounded-2xl">
                    <td className="p-3 md:p-5 md:px-10 px-3  border-t-2 font-semibold">Support</td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 border-t-2 "></td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3  border-t-2"></td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Email support</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">Yes </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Chat support</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No</td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Community Support</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Integration Engineer</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>


                  <tr className="rounded-2xl">
                    <td className="p-3 md:p-5 md:px-10 px-3  border-t-2 font-semibold">Analytics</td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3 border-t-2 "></td>
                    <td className="p-3 md:p-5 md:pl-16 md:pr-10 px-3  border-t-2"></td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Playback & Engagement</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes </td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">Yes </td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Latency</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">Yes</td>
                  </tr>
                  <tr className="rounded-2xl border-t-2">
                    <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Experience</td>
                    <td className="p-3 md:p-5 md:pl-20 md:pr-10 px-3">Yes</td>
                    <td className="p-3 md:p-5 md:pl-24 md:pr-10 px-3">No </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        }

      </div>
    </div>
  );
};

export default Section4;
