function HomePage() {
  return (
    <div className="flex flex-col h-full items-center justify-center -translate-y-10 p-4 ">
      <h1 className="main-heading">
        Hello I'm {""}
        <span className="text-highlightRed dark:text-highlightBlue bg-[rgba(151,104,90,0.1)] px-2">
          David
        </span>
      </h1>
      <h1 className="main-heading cursor typewriter-animation">
        I'm a full-stack developer from{" "}
        <span className="text-highlightRed dark:text-highlightBlue bg-[rgba(151,104,90,0.1)] px-2">
          London.
        </span>
      </h1>
    </div>
  );
}

export default HomePage;
