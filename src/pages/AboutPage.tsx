import myProfileImg from "../assets/My-profile.jpg";
import LogoShell from "../components/ui/logoShell";
import reactLogo from "../assets/react.svg";
import cssLogo from "../assets/css-3-svgrepo-com.svg";
import JavaScriptLogo from "../assets/128px-Unofficial_JavaScript_logo_2.svg.png";
import typeScriptLogo from "../assets/128px-Typescript_logo_2020.svg.png";
import nodeLogo from "../assets/nodejs-icon-svgrepo-com.svg";
import expressLogo from "../assets/icon-expressjs.svg";
import reduxLogo from "../assets/redux-logo-svgrepo-com.svg";
import tailwindLogo from "../assets/128px-Tailwind_CSS_Logo.svg.png";
import gitLogo from "../assets/git-icon-logo-svgrepo-com.svg";
import htmlLogo from "../assets/128px-HTML5_logo_and_wordmark.svg.png";
import Button from "../components/ui/button";

export default function AboutPage() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center gap-10 lg:no-wrap">
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-8">
            <div className="flex justify-center items-center shrink-0 relative rounded-full special-border">
              <img
                src={myProfileImg}
                className="rounded-full w-[clamp(220px,30vw,300px)] h-[clamp(220px,30vw,300px)] object-cover object-[50%_20%]"
              />
            </div>
            <div className="flex flex-row justify-around w-full">
              <Button name="LinkedIn" />
              <Button name="Resume" />
              <Button name="GitHub" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full place-items-center">
              <h1
                className="font-bold text-[clamp(1.4rem,2vw,2rem)]
             w-fit"
              >
                About Me.
              </h1>
            </div>
            <div className="w-auto lg:text-[1.4rem] lg:w-full md:w-[90%] font-medium self-center-safe text-[clamp(0.6rem,2.5vw,1.3rem)] mx-auto space-y-5">
              <p>
                I’m a Full Stack Developer on a journey of life-long learning,
                with a passion for JavaScript and all things React. I arrived
                here after a decade in investment banking, spending my time in
                stuffy boardrooms wearing a suit and advising on large fintech
                investments. Here I got to meet the companies and people
                building growing tech products and services businesses, but this
                wasn't enough — I wanted to understand how the products I was
                investing in were actually built.</p>
              <p>
                Coding has become my outlet, a way to combine my love of
                problem-solving with a hands-on connection to the tech market I
                had been immersed in for years. I’m driven by a constant quest
                to learn, explore new tools, and build things that are not just
                functional, but meaningful.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 rounded-2xl pb-2 mb-4">
            <div className="w-full place-items-center">
              <h1
                className="font-bold text-[clamp(1.4rem,2vw,2rem)]
             w-fit "
              >
                Technologies.
              </h1>
            </div>
            <div className="flex lg:flex-1 flex-wrap justify-center gap-2 items-center font-medium">
              <LogoShell name="JavaScript" imgUrl={JavaScriptLogo} />
              <LogoShell name="TypeScript" imgUrl={typeScriptLogo} />
              <LogoShell name="React" imgUrl={reactLogo} />
              <LogoShell name="Node.js" imgUrl={nodeLogo} />
              <LogoShell name="Express.js" imgUrl={expressLogo} />
              <LogoShell name="Redux" imgUrl={reduxLogo} />
              <LogoShell name="Tailwind CSS" imgUrl={tailwindLogo} />
              <LogoShell name="Git" imgUrl={gitLogo} />
              <LogoShell name="CSS" imgUrl={cssLogo} />
              <LogoShell name="HTML" imgUrl={htmlLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//after:block after:border-b after:border-amberHome/20 after:w-5/6 after:mx-auto after:mt-6
