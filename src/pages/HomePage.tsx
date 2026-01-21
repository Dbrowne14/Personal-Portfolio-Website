function HomePage() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <h1 className="text-4xl text-center -translate-y-10 text-[clamp(1.5rem,5vw,2.5rem)]">
        Hello I'm{" "}
        <span className="text-highlightRed dark:text-highlightBlue">David</span>
        . <br></br>I'm a full-stack developer from{" "}
        <span className="text-highlightRed dark:text-highlightBlue">
          London.
        </span>
      </h1>
    </div>
  );
}

export default HomePage;
