import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";
import TeamMemberCard from "./TeamMembers";
import { TiLocationArrow } from "react-icons/ti";

const teamMembers = [
  {
    name: "Creaxr",
    role: "Founder & CEO",
    image: "https://vandal-vert.vercel.app/_next/image?url=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fuser%2F230%2F2aa7db341599339.665768e8816e6.jpg&w=1920&q=75",
    description: "Visionary leader with a passion for innovation and design.",
    size: "large",
  },
  {
    name: "Saizou",
    role: "Motion Graphics Designer",
    image: "https://vandal-vert.vercel.app/_next/image?url=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fuser%2F230%2F5fb1f51665061643.665b41e46ad23.png&w=1920&q=75",
    description:"\n \n",
  },
  {
    name: "hyper",
    role: "3d graphics",
    image: "https://vandal-vert.vercel.app/_next/image?url=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fuser%2F230%2F37f83f1307089043.665b00815c77e.jpg&w=1920&q=75",
    description: "\n \n",
  },

];

const TeamMembers = () => (
  <section className="bg-black py-24">
    <div className="container mx-auto px-4 md:px-10 text-blue-50">
    <div className="px-5 py-32 flex flex-col justify-center items-center">
    <p className="font-general text-sm uppercase md:text-[10px]">
        redefining creative landscapes
        </p>
    <AnimatedTitle
            title="enter t<b>h</b>e <br /> vandal w<b>o</b>rld"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

      </div>

      <div className="grid gap-8 grid-cols-2 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(200px,auto))]">
        <BentoTilt className="md:col-span-2 md:row-span-2">
          <TeamMemberCard {...teamMembers[0]} size="large" />
        </BentoTilt>
        
        <BentoTilt className="md:col-span-1 md:row-span-1">
          <TeamMemberCard {...teamMembers[1]} />
        </BentoTilt>
        
        <BentoTilt className="md:col-span-1 md:row-span-1">
          <TeamMemberCard {...teamMembers[2]} />
        </BentoTilt>
        
      
        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-[#DAA90F] p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              J<b>o</b>IN U<b>S</b>
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default TeamMembers;

