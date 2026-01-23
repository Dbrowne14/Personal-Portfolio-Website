import myProfileImg from "../assets/My-profile.jpg";
import LogoShell from "../components/ui/logoShell";
import reactLogo from "../assets/react.svg";
import cssLogo from "../assets/css-3-svgrepo-com.svg";

export default function AboutPage() {
  return (
    <div className="overflow-auto">
      <div className="flex gap-4">
        <div className="flex flex-wrap justify-center gap-4 lg:no-wrap">
          <div className="flex justify-center items-center shrink-0 relative ">
            <img
              src={myProfileImg}
              className="rounded-full w-[clamp(220px,30vw,300px)] text- h-[clamp(220px,30vw,300px)] object-cover object-[50%_20%] border-3 special-border"
            />
          </div>
          <div className="flex lg:flex-1 flex-wrap justify-center gap-2 items-center font-medium">
            <LogoShell name="JavaScript" imgUrl="" />
            <LogoShell name="TypeScript" imgUrl="" />
            <LogoShell name="React" imgUrl={reactLogo} />
            <LogoShell name="Node.js" imgUrl="" />
            <LogoShell name="Express.js" imgUrl="" />
            <LogoShell name="Redux" imgUrl="" />
            <LogoShell name="Tailwind CSS" imgUrl="" />
            <LogoShell name="Git" imgUrl="" />
            <LogoShell name="CSS" imgUrl={cssLogo} />
            <LogoShell name="HTML" imgUrl="" />
          </div>
        </div>
      </div>
      <div className="w-auto mt-10 lock font-medium self-center-safe text-[clamp(0.8rem,4vw,1.3rem)]">
        {" "}
        I’m a Full Stack Developer on a journey of life-long learning, with a
        passion for JavaScript and all things React. I arrived here after a
        decade in investment banking, spending my time wearing a suit and
        advising on large fintech investments. The exposure to the companies and
        people I was interacting with sparked a curiosity that I couldn’t ignore
        — I wanted to understand how the products I was investing in were
        actually built. Coding became a way to combine my love of
        problem-solving with a hands-on connection to the tech market I had been
        immersed in for years. I’m driven by a constant quest to learn, explore
        new tools, and build things that are not just functional, but
        meaningful.
      </div>
    </div>
  );
}

//after:block after:border-b after:border-amberHome/20 after:w-5/6 after:mx-auto after:mt-6

//BIG TASK IS TO CHANGE THE LAYOUT TO FLEX FROM GRID. GRID Good but not very responsive when nested.
