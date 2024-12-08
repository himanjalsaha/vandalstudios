import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoBackground = ({ 
  videoSrc = "videos/hero-1.mp4", 
  onLoad,
  clipPath = "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
  borderRadius = "0% 0% 40% 10%"
}) => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: clipPath,
      borderRadius: borderRadius,
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div
      id="video-frame"
      className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
        onLoadedData={onLoad}
      />
    </div>
  );
};

export default VideoBackground;

