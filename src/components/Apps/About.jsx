import { useState } from "react";
import { badges } from "../../content/badges";
import resumeUrl from "../../../public/assets/Resume/Renishkar_Resume.pdf";

const About = ({ isMaximized }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px]  h-full overflow-y-auto ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      <div
        className={`flex sm:flex-row flex-col sm:gap-10 items-center sm:items-start justify-start`}
      >
        <img
          src="/assets/profilePic.png"
          alt="profilePhoto"
          className="border-s-[2px] border-s-[#fafafa] border-t-[2px] border-t-[#fafafa] border-black border-[1px] w-[220px]"
        />
        <div className=" flex flex-col sm:items-start items-center  gap-1 mt-4 sm:mt-14">
          <h2
            className={` font-extrabold ${
              isMaximized ? " text-[40px]" : "text-[30px]"
            }`}
          >
            Renishkar J
          </h2>
          <h2
            className={` font-extrabold ${
              isMaximized ? " text-[25px]" : "text-[16px]"
            }`}
          >
            Full Stack Development
          </h2>
          <h4
            className={` text-red-700 ${
              isMaximized ? " text-[20px]" : "text-[16px]"
            }`}
          >
            📍 TamilNadu, India.
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
        {badges.map((url, i) => {
          return <img src={url} alt="badge" key={i} />;
        })}
      </div>
      <div>
        <h4 className=" font-bold pb-3">About Me</h4>
        <p className=" before:ps-7">
          Hello, I'm Renishkar, a passionate full stack web developer. I have a
          deep love for coding and problem-solving, and I thrive on the
          challenges that come with building innovative and user-friendly web
          applications. With a strong foundation in both front-end and back-end
          development, I enjoy creating seamless and dynamic experiences for
          users.
          <span
            className={`text-blue-500 ps-2 cursor-pointer ${
              seeMore ? "hidden" : ""
            }`}
            onClick={() => setSeeMore((prev) => !prev)}
          >
            see more...
          </span>
        </p>
        {seeMore && (
          <>
            <p className=" pt-6">
              My journey into the world of programming began after I watched the
              series named "Silicon Valley" during lockdown. The show's
              portrayal of coding like a super power fascinated me, igniting a
              strong attraction towards the world of programming. Since then, I
              have embraced coding as a means to bring ideas to life and make a
              tangible impact. As a movie buff, I appreciate the art of
              storytelling and enjoy the cinematic experience, allowing me to
              combine my technical expertise with my creative vision.
            </p>
            <p className=" pt-6">
              Lastly, I am a huge fan of working with like-minded individuals,
              as collaboration fuels my creativity and helps me grow both
              personally and professionally.
              <span
                className={`text-blue-500 ps-1 cursor-pointer ${
                  !seeMore ? "hidden" : ""
                }`}
                onClick={() => setSeeMore((prev) => !prev)}
              >
                (hide)
              </span>
            </p>
          </>
        )}
        <div className=" flex justify-center">
          <a
            target="_blank"
            href={resumeUrl}
            download
            className=" flex mt-10 w-fit justify-center items-center gap-[5px] p-[5px] text-sm border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] hover:border-e-[#dfdfdf]  hover:border-s-[grey]  hover:border-t-[grey] hover:border-b-[#dfdfdf] hover:bg-[#b5b5b5] transition-all "
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
