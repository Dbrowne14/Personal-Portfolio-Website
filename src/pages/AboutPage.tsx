import myProfileImg from "../assets/My-profile.JPG";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-2 grid-rows-[4fr_4fr] [grid-template-areas:'AAA_BBB'_'CCC_CCC']">
      <div className="content-center text-center">
        <img
          src={myProfileImg}
          className="rounded-full w-88 h-88 object-cover"
        />
      </div>
      <div className="BBB"></div>
      <div className="CCC"></div>
    </div>
  );
}
