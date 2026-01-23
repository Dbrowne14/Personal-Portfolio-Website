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
      gap-4 overflow-auto"
      
    >
      <div className="[grid-area:AAA] w-full h-full flex justify-center items-center">
        <img
          src={myProfileImg}
          className="  rounded-full w-[clamp(220px,30vw,300px)] text- h-[clamp(220px,30vw,300px)] object-cover object-[50%_20%] border-2 border-amberHome/50"
        />
      </div>
      <div className="[grid-area:BBB] font-medium self-center-safe overflow-auto text-[clamp(0.8rem,4vw,1.3rem)]">
        {" "}
        I’m a Full Stack Developer who came to tech after a decade in investment
        banking, where I spent my time advising on fintech investments. That
        exposure to the fast-moving world of technology sparked a curiosity that
        I couldn’t ignore — I wanted to understand how the products I was
        investing in were actually built. Coding became a way to combine my love
        of problem-solving with a hands-on connection to the tech market I had
        been immersed in for years. I’m driven by a constant quest to learn,
        explore new tools, and build things that are not just functional, but
        meaningful.
      </div>
      <div className="[grid-area:CCC]  w-full h-full bg-blue-200">
            <div className="flex flex-col gap-8 overflow-auto">
      <div className="flex flex-col gap-1">
        <h2>GifGallery: Reddits best Gifs all in one place</h2>
        <p>
          I designed an app that displays interesting and cool gifs in a gallery
          format for users to consume and enjoy. This uses the Reddit api and
          was built by creating a proxy server locally and routing requests
          through it, caching fetches on first load and accesing through RTK
          Query.
        </p>
        <p>
          Built using React-Redux, RTK Query, TypeScript, JavaScript, CSS and
          HTML
        </p>
        <p>
          Github: <a href="">...</a>
        </p>
        <p>
          Live Website: <a href="">...</a>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2>DaveJams: Spotify Playlist Game</h2>
        <p>
          I designed and built a Spotify-powered playlist game using React and
          OAuth 2.0 authentication. Players create ten-song playlists within a
          strict 35-minute limit, which are evaluated and ranked through a mix
          of internal scoring logic and external performance metrics.
        </p>
        <p>Built using React, TypeScript, JavaScript, CSS and HTML</p>
        <p>
          Github: <a href="">Jamming Docs</a>
        </p>
        <p>
          Live Website: <a href="">Jamming</a>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2>Peckham Planeswalkers: MTG Chaos Draft score tallying</h2>
        <p>
          I designed website and web app using Javascript, CSS and HTML that
          suggests blocks and sets, records scores and identifies matchups for
          the Magic the Gathering Chaos Draft format
        </p>
        <p>
          Built using JavaScript, CSS and
          HTML
        </p>
        <p>
          Github: <a href="">...</a>
        </p>
        <p>
          Live Website: <a href="">...</a>
        </p>
      </div>
    </div>
      </div>
    </div>
  );
}

//after:block after:border-b after:border-amberHome/20 after:w-5/6 after:mx-auto after:mt-6

//BIG TASK IS TO CHANGE THE LAYOUT TO FLEX FROM GRID. GRID Good but not very responsive when nested.
