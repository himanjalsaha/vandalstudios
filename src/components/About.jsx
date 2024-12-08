import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    })

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
     
      borderRadius: 0,
    }).to(".about-image img", {
        padding: 0,
      }, "<");
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-2xl uppercase md:text-xl">
          we are vandal *
        </p>

        <AnimatedTitle
   title="From bland <br /> to <b>b</b>rilliant  "
          containerClass="mt-5 !text-black text-center hero-heading"
        />

       <div className="about-subtext">
  <p>Crafting designs that redefine your vision—where creativity meets innovation.</p>
  <p className="text-gray-500">
    At Vandal Studios, we transform ideas into impactful designs, blending expertise with passion to create a legacy of brilliance.
  </p>
</div>

      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path   about-image">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/fdf869199986965.665ab1893343c.jpg"
            alt="Background"
            className="absolute p-10 md:p-0     left-0 top-0   size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;