function Home() {
  return (
    <div className="flex justify-center flex-col items-center w-full h-full ">
      <h1 className="text-4xl mt-32">Welcome to the Game Quiz</h1>
      <h2 className="text-xl mt-5 mb-5">
        Please select the main genre of the game
      </h2>
      <a
        href="/quiz"
        className="text-2xl bg-black/15 shadow rounded-md hover:bg-black hover:text-white p-4 "
      >
        Start Quiz
      </a>
    </div>
  );
}

export default Home;
