import myProfileImg from "../assets/My-profile.jpg";

export default function AboutPage() {
  return (
    <div
      className="
      grid
      grid-cols-1
      grid-rows-[3fr_4fr_3fr]
      [grid-template-areas:'AAA'_'BBB'_'CCC']
    
      md:grid-cols-2
      md:grid-rows-[4fr_4fr]
      md:[grid-template-areas:'AAA_BBB'_'CCC_CCC']
      gap-4 "
      
    >
      <div className="[grid-area:AAA] w-full h-full flex justify-center items-center">
        <img
          src={myProfileImg}
          className="  rounded-full w-[clamp(220px,30vw,300px)] h-[clamp(220px,30vw,300px)] object-cover object-[50%_20%] border-2 border-amberHome/50"
        />
      </div>
      <div className="[grid-area:BBB] px-4 self-center-safe overflow-auto min-h-0"> I’m a Full Stack Developer who came to tech after a decade in investment banking, where I spent my time advising on fintech investments. That exposure to the fast-moving world of technology sparked a curiosity that I couldn’t ignore — I wanted to understand how the products I was investing in were actually built. Coding became a way to combine my love of problem-solving with a hands-on connection to the tech market I had been immersed in for years. I’m driven by a constant quest to learn, explore new tools, and build things that are not just functional, but meaningful.</div>
      <div className="[grid-area:CCC] overflow-auto min-h-0"></div>
    </div>
  );
}

//after:block after:border-b after:border-amberHome/20 after:w-5/6 after:mx-auto after:mt-6