
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-[31px] py-[21px] max-md:px-5">
      <div className="flex items-center gap-2.5">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;2886:72309&quot; layer-name=&quot;top bar&quot; width=&quot;1870&quot; height=&quot;47&quot; viewBox=&quot;0 0 1870 47&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;h-[47px] w-auto&quot;> <rect x=&quot;1692&quot; y=&quot;1&quot; width=&quot;177&quot; height=&quot;44.6624&quot; rx=&quot;22.3312&quot; fill=&quot;#FDFDFD&quot; stroke=&quot;#080808&quot; stroke-width=&quot;2&quot;></rect> <text fill=&quot;#080808&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Lexend&quot; font-size=&quot;16.8787&quot; font-weight=&quot;500&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;1717&quot; y=&quot;28.8915&quot;>Download Now</tspan></text> <text fill=&quot;#080808&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;DM Sans&quot; font-size=&quot;18&quot; font-weight=&quot;300&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;791.257&quot; y=&quot;31.3565&quot;>Meet Nova</tspan></text> <text fill=&quot;#110B53&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;DM Sans&quot; font-size=&quot;18&quot; font-weight=&quot;600&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;927.247&quot; y=&quot;31.3565&quot;>Why AI?</tspan></text> <text fill=&quot;#080808&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;DM Sans&quot; font-size=&quot;18&quot; font-weight=&quot;300&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;1045.35&quot; y=&quot;31.3565&quot;>FAQ</tspan></text> <path d=&quot;M31.9381 24.8955C31.8541 24.7132 31.7681 24.533 31.68 24.3527L28.2679 17.3687C28.186 17.1987 27.8542 16.4593 27.7928 16.3508C26.0232 13.3196 21.8778 18.8208 20.0694 21.5079C19.5307 22.3087 19.1989 22.8597 19.1989 22.8597C20.7207 25.1023 23.5348 31.1627 23.5348 31.1627C29.0421 33.8108 37.3512 27.5334 37.3512 27.5334C34.0292 29.0285 32.2719 25.6225 31.9402 24.8955H31.9381Z&quot; fill=&quot;url(#paint0_linear_2886_72309)&quot;></path> <path d=&quot;M42.9188 23.7111C41.991 23.5309 40.8441 24.4505 40.3402 24.9134C40.2644 24.981 39.4595 25.6875 38.7038 26.3491C37.1841 27.6783 35.519 28.8334 33.7228 29.7551C30.8145 31.2481 26.7081 32.688 23.5315 31.1621L24.2708 32.5343C25.0983 34.1892 26.534 35.5123 26.534 35.5123C34.2942 41.2982 43.0376 27.9732 43.0376 27.9732C44.5183 25.5094 44.2173 24.7782 44.2173 24.7782C44.2173 24.7782 44.1517 23.9508 42.9208 23.7111H42.9188Z&quot; fill=&quot;url(#paint1_linear_2886_72309)&quot;></path> <path d=&quot;M27.7922 16.35C26.7804 13.9456 24.6914 9.73878 22.1067 8.71064C22.1067 8.71064 15.2414 5.20634 8.87184 13.7613C2.5043 22.3182 0.704018 28.3519 0.704018 28.3519C0.704018 28.3519 -1.86635 34.9099 2.81561 37.6851C7.49961 40.4603 10.453 37.0358 10.453 37.0358C10.453 37.0358 12.3802 34.9632 15.3193 29.4374C16.3945 27.4159 17.6889 25.118 19.0345 23.0494C19.0345 23.0494 19.4318 22.4104 20.0667 21.5072C21.8773 18.8201 26.0226 13.3189 27.7901 16.35H27.7922Z&quot; fill=&quot;url(#paint2_linear_2886_72309)&quot;></path> <text fill=&quot;#080808&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Lexend&quot; font-size=&quot;36.3639&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;49.6781&quot; y=&quot;36.9214&quot;>Ace</tspan></text> <defs> <linearGradient id=&quot;paint0_linear_2886_72309&quot; x1=&quot;16.4504&quot; y1=&quot;12.6745&quot; x2=&quot;36.0589&quot; y2=&quot;36.0433&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop offset=&quot;0.23&quot; stop-color=&quot;#EF00EA&quot;></stop> <stop offset=&quot;0.77&quot; stop-color=&quot;#3B0CBE&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#310DF6&quot;></stop> </linearGradient> <linearGradient id=&quot;paint1_linear_2886_72309&quot; x1=&quot;25.9093&quot; y1=&quot;35.4017&quot; x2=&quot;44.2972&quot; y2=&quot;24.7864&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#A139FF&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#00C1F6&quot;></stop> </linearGradient> <linearGradient id=&quot;paint2_linear_2886_72309&quot; x1=&quot;-1.72708&quot; y1=&quot;31.2766&quot; x2=&quot;29.4962&quot; y2=&quot;13.2492&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#540CFF&quot;></stop> <stop offset=&quot;0.42&quot; stop-color=&quot;#E454FF&quot;></stop> <stop offset=&quot;0.82&quot; stop-color=&quot;#FFC8FF&quot;></stop> <stop offset=&quot;0.94&quot; stop-color=&quot;white&quot;></stop> </linearGradient> </defs> </svg>",
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-10 max-md:hidden">
        <Link to="#" className="text-lg text-[#080808] font-light">
          Meet Nova
        </Link>
        <Link to="#" className="text-lg text-[#110B53] font-semibold">
          Why AI?
        </Link>
        <Link to="#" className="text-lg text-[#080808] font-light">
          FAQ
        </Link>
      </div>
      <CustomButton>Download Now</CustomButton>
      <button className="hidden max-md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ti ti-menu-2 text-2xl"
        >
          <path d="M4 6h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
