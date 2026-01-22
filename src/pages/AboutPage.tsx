import myProfileImg from "../assets/My-profile.jpg";

export default function AboutPage() {
  return (
    <div
      className="
      grid
      grid-cols-1
      grid-rows-3
      [grid-template-areas:'AAA'_'BBB'_'CCC']
    
      md:grid-cols-2
      md:grid-rows-[4fr_4fr]
      md:[grid-template-areas:'AAA_BBB'_'CCC_CCC']
      gap-4"
    >
      <div className="[grid-area:AAA] justify-self-center self-center">
        <img
          src={myProfileImg}
          className=" rounded-full w-[clamp(220px,30vw,300px)] h-[clamp(220px,30vw,300px)] object-cover object-[50%_20%] border-2 border-amberHome"
        />
      </div>
      <div className="[grid-area:BBB]"></div>
      <div className="[grid-area:CCC]"></div>
    </div>
  );
}
