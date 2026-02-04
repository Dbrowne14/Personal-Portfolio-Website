import myProfileImg from "../../assets/My-profile.jpg";
import { logos } from "../../data/logoData";
import LogoShell from "../../components/ui/logoShell";
import BulletList from "../../components/ui/bulletList";
import LinkedInFav from "../../assets/custom_Logos/linkedInFav";
import GithubFav from "../../assets/custom_Logos/githubFav";
import CVFav from "../../assets/custom_Logos/cvFav";
import { musicTastes } from "../../data/aboutPageData";
import { Rotator } from "../../components/ui/rotator";
import EmailFav from "../../assets/custom_Logos/emailFav";

export default function AboutPage() {
  return (
    <section className="col-gaps justify center w-full h-full items-center ">
      <div className="col-gaps content-width justify center  items-center md:gap-16">
        <div className="col-gaps content-width justify-center md:h-100 items-center md:flex-row md:gap-18 py-4 ">
          <div className="col-gaps gap-4 sm:gap-5 md:gap-8">
            <div className="flex justify-center items-center shrink-0 rounded-full">
              <img
                src={myProfileImg}
                className="rounded-full w-[clamp(220px,30vw,300px)] h-[clamp(220px,30vw,300px)] object-cover object-[50%_20%]"
              />
            </div>
            <div className="flex flex-1 justify-center gap-4">
              <h1
                className="hidden sm:block p-3 border-r font-bold border-gray-400 text-[14px]
               w-fit"
              >
                Find Me
              </h1>
              <div className="flex flex-row justify-center items-center gap-6">
                <LinkedInFav link="https://www.linkedin.com/in/david-browne-544bb1137/" />
                <GithubFav link="https://github.com/Dbrowne14" />
                <CVFav link="" />
                <EmailFav link="mailto:davidbrowne1992@gmail.com" />
              </div>
            </div>
          </div>
          <div className="w-auto h-full flex md:flex-1 lg:w-full md:w-[90%] ">
            <div className="md:flex md:flex-1 md:flex-col md:justify-start gap-4 lg:w-full self-center-safe ">
              <ul className="flex flex-col gap-2 md:gap-3">
                <BulletList content="Full-stack developer" link="👨‍💻" />
                <BulletList
                  content="Former fintech investment banker with 8-years work ex"
                  link="🏦"
                />
                <BulletList
                  content=" Passionate about JavaScript and React"
                  link="🤟"
                />
                <BulletList
                  content=" Working at the intersection of tech and finance"
                  link="🎯"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="content-width flex flex-col justify-center gap-10">
          <div className="flex flex-wrap gap-4 rounded-2xl pb-2 mb-4">
            <div className="flex lg:flex-1 flex-wrap justify-center gap-6 items-center">
              <h1
                className="p-3 border-b font-bold lg:border-b-0 lg:border-r border-gray-400 text-[17px]
               w-fit text-"
              >
                Tech Stack
              </h1>
              <div className="flex lg:flex-1 flex-wrap justify-center lg:justify-start gap-2 items-center">
                {logos.map(({ name, link }) => {
                  return <LogoShell name={name} link={link} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-4">
            <div className="sm:w-full flex justify-center sm:justify-start ">
              <h1
                className=" w-fit font-bold text-[clamp(1.2rem,2vw,1.4rem)] border-b pb-3 border-gray-400 sm:border-b-0
                "
              >
                More about me...
              </h1>
            </div>
            <div className="w-full place-items-center  text-variableText space-y-5 lg:leading-9">
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
              <p>
                I’m someone who likes keeping both my mind and life in motion. I
                manage my own investment portfolio and enjoy the strategy behind
                growing it over time. Outside of that, I’m a big anime fan,
                especially classic 80s and 90s Ghibli films, and I’m into pretty
                much every sport — with football and cycling at the top of the
                list. Long walks are my reset button, and I’m always up for
                learning something new or experiencing something different.
                Lately, my soundtrack has been a steady stream of{" "}
                <Rotator array={musicTastes} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//after:block after:border-b after:border-amberHome/20 after:w-5/6 after:mx-auto after:mt-6
// include an Interval-driven index loop on my favorite soundtracks rotate it
