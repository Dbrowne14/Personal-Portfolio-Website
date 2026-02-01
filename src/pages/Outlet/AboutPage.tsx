import myProfileImg from "../../assets/My-profile.jpg";
import LogoShell from "../../components/ui/logoShell";
import reactLogo from "../../assets/logos/react.svg";
import cssLogo from "../../assets/logos/css-3-svgrepo-com.svg";
import JavaScriptLogo from "../../assets/logos/128px-Unofficial_JavaScript_logo_2.svg.png";
import typeScriptLogo from "../../assets/logos/128px-Typescript_logo_2020.svg.png";
import nodeLogo from "../../assets/logos/nodejs-icon-svgrepo-com.svg";
import expressLogo from "../../assets/logos/icon-expressjs.svg";
import reduxLogo from "../../assets/logos/redux-logo-svgrepo-com.svg";
import tailwindLogo from "../../assets/logos/128px-Tailwind_CSS_Logo.svg.png";
import gitLogo from "../../assets/logos/git-icon-logo-svgrepo-com.svg";
import htmlLogo from "../../assets/logos/128px-HTML5_logo_and_wordmark.svg.png";
import BulletList from "../../components/ui/bulletList";
import Button from "../../components/ui/button";

export default function AboutPage() {
  return (
    <section className="col-gaps justify center w-full items-center ">
      <div className="col-gaps content-width justify center  items-center md:gap-16">
        <div className="col-gaps content-width justify-center md:h-100 items-center md:flex-row md:gap-18 py-4 ">
          <div className="col-gaps gap-3 sm:gap-5 md:gap-8">
            <div className="flex justify-center items-center shrink-0 rounded-full">
              <img
                src={myProfileImg}
                className="rounded-full w-[clamp(220px,30vw,300px)] h-[clamp(220px,30vw,300px)] object-cover object-[50%_20%]"
              />
            </div>
            <div className="flex flex-row justify-around w-full">
              <Button
                name="LinkedIn"
                link="https://www.linkedin.com/in/david-browne-544bb1137/"
              />
              <Button name="GitHub" link="https://github.com/Dbrowne14" />
              <Button name="Resume" link="" />
            </div>
          </div>
          <div className="w-auto h-full flex md:flex-1 lg:w-full md:w-[90%] font-medium">
            <div className="md:flex md:flex-1 md:flex-col md:justify-start gap-4 lg:w-full font-medium self-center-safe ">
              <ul className="flex flex-col w- gap-2 md:gap-3">
                <BulletList content="Full-stack developer, lifelong learning mindset" logo="👨‍💻"/>
                <BulletList content="Former fintech investment banker with 8-years work ex" logo="🏦" />
                <BulletList content=" Passionate about JavaScript and React" logo="🧠" />
                <BulletList content=" Working at the intersection of tech and finance" logo="🎯" />
              </ul>
            </div>
          </div>
        </div>
        <div className="content-width flex flex-col justify-center gap-10">
          <div className="flex flex-wrap gap-4 rounded-2xl pb-2 mb-4">
            <div className="w-full place-items-center sm:hidden">
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
          <div className="w-full flex flex-col justify-center gap-4">
            <div className="w-full">
              <h1
                className="font-bold text-[clamp(1.2rem,2vw,2rem)]
               w-fit"
              >
                More about me...
              </h1>
            </div>
            <div className="w-full place-items-center lg:text-[1.4rem] font-medium text-[clamp(0.7rem,2.5vw,1.3rem)] space-y-5">
              <p>
                I’m a Full-Stack Developer on a journey of life-long learning,
                with a passion for JavaScript and all things React. I arrived
                here after a decade in investment banking, spending my time in
                stuffy boardrooms wearing a suit and advising on large fintech
                investments. Here I got to meet the companies and people
                building growing tech products and services businesses, but this
                wasn't enough — I wanted to understand how the products I was
                investing in were actually built.
              </p>
              <p>
                Coding has become my outlet, a way to combine my love of
                problem-solving with a hands-on connection to the tech market I
                had been immersed in for years. I’m driven by a constant quest
                to learn, explore new tools, and build things that are not just
                functional, but meaningful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//after:block after:border-b after:border-amberHome/20 after:w-5/6 after:mx-auto after:mt-6
