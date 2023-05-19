import { useState } from "react";
import { badges } from "../../content/badges";

const About = ({ isMaximized }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className=" flex flex-col gap-[35px] px-[70px] py-[30px] h-full overflow-y-auto">
      <div className={`flex gap-10 justify-start`}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-01.appspot.com/o/profilePic.png?alt=media&token=35428e3a-2149-4d35-a26c-c3f5741d7dab"
          alt="profilePhoto"
          className=" border-s-[2px] border-s-[#fafafa] border-t-[2px] border-t-[#fafafa] border-black border-[1px] w-[220px]"
        />
        <div className=" flex flex-col gap-1 mt-14">
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

      <div className="flex flex-wrap gap-1">
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
            className={`text-blue-500 ps-3 cursor-pointer ${
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
              I am constantly learning and exploring new technologies to stay
              up-to-date with the latest trends in web development. Lastly, I am
              a huge fan of working with like-minded individuals, as
              collaboration fuels my creativity and helps me grow both
              personally and professionally.
              <span
                className={`text-blue-500 ps-3 cursor-pointer ${
                  !seeMore ? "hidden" : ""
                }`}
                onClick={() => setSeeMore((prev) => !prev)}
              >
                hide..
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
