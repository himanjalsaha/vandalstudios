import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";
import TeamMemberCard from "./TeamMembers";
import { TiLocationArrow } from "react-icons/ti";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
    description: "Visionary leader with a passion for innovation and design.",
    size: "large",
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
    description: "Award-winning designer with an eye for detail and aesthetics.",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
    description: "Experienced full-stack developer and technology enthusiast.",
  },
  {
    name: "Emily Brown",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
    description: "Strategic thinker with a knack for brand storytelling.",
  },
  {
    name: "Alex Lee",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRzaG90fGVufDB8fDB8fHww",
    description: "User-centric designer focused on creating intuitive experiences.",
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
        
        <BentoTilt className="md:col-span-1 md:row-span-1">
          <TeamMemberCard {...teamMembers[3]} />
        </BentoTilt>
        
        <BentoTilt className="md:col-span-1 md:row-span-1">
          <TeamMemberCard {...teamMembers[4]} />
        </BentoTilt>
        
        <BentoTilt className="md:col-span-2 md:row-span-1">
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-violet-300 p-8">
            <div className="text-center">
              <h3 className="special-font mb-4 text-3xl text-black">
                Join Our Team
              </h3>
              <p className="mb-4 font-circular-web text-black">Be part of our creative journey and help shape the future of design.</p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white transition-colors hover:bg-opacity-80">
                  <TiLocationArrow />
                  <span className=" text-nowrap">Join us</span>
                </button>
              </div>
            </div>
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default TeamMembers;

