import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const TeamMemberCard = ({ image, name, role, description, size = "normal" }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full overflow-hidden rounded-lg">
      <img
        src={image}
        alt={name}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between bg-black/50 p-5 text-blue-50">
        <div>
          <h2 className={`bento-title special-font ${size === 'large' ? 'text-4xl' : 'text-2xl'}`}>{name}</h2>
          <p className={`mt-2 font-semibold ${size === 'large' ? 'text-lg' : 'text-sm'}`}>{role}</p>
          {description && (
            <p className={`mt-20 max-w-64 ${size === 'large' ? 'text-base' : 'text-xs md:text-sm'}`}>{description}</p>
          )}
        </div>

        <div
  ref={hoverButtonRef}
  onMouseMove={handleMouseMove}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20 sm:px-4 sm:py-1 sm:text-xs md:px-3 md:py-1 md:text-xs lg:px-4 lg:py-2 lg:text-sm"
>
  <div
    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
    style={{
      opacity: hoverOpacity,
      background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
    }}
  />
  <TiLocationArrow className="relative z-20" />
  <p className="relative z-20">View</p>
</div>

      </div>
    </div>
  );
};

export default TeamMemberCard;
