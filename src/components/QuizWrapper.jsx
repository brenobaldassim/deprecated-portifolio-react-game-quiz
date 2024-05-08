import { useEffect, useState } from "react";
import { getAllGenres } from "../redux/endpoints/genres_endpoints";
import { getAllGames } from "../redux/endpoints/games_endpoints";
import { useSelector, useDispatch } from "react-redux";
import { promiseStatus } from "../redux/constants/constants";
import {
  INCREMENT_LOADER,
  STATUS_COMPLETED,
  STATUS_WAITING,
  STOP_LOADER,
} from "../redux/store/quizSlice";
import { pointStatus } from "../redux/constants/constants";
import OptionsList from "./OptionsList";
import GameImageDisplay from "./GameImageDIsplay";
import ProgressBar from "./progress_bar/ProgressBar";

let interval = undefined;
let MAX_INTERVAL = 5;

const QuizWrapper = () => {
  const { status: statusGenre } = useSelector((state) => state.genre);
  const { gameItems, status: statusGame } = useSelector((state) => state.game);
  const {
    points,
    status: statusPoint,
    loader,
  } = useSelector((state) => state.quiz);
  const [game, setGame] = useState({});
  const [index, setIndex] = useState(1);
  const dispatch = useDispatch();

  // Fetch data for options on OptionsList.
  useEffect(() => {
    if (statusGenre === promiseStatus.idle) {
      dispatch(getAllGenres());
    }
  }, [statusGenre, dispatch]);

  // Fetch the games data so the game-quiz works.
  useEffect(() => {
    if (statusGame === promiseStatus.idle) {
      dispatch(getAllGames());
    }
  }, [statusGame, dispatch]);

  // This is so I can check if an option was selected and it iterates to the next game.
  useEffect(() => {
    if (statusPoint === pointStatus.pointed) {
      if (gameItems.length > index && index <= MAX_INTERVAL) {
        setGame(gameItems[index]);
        setIndex(index + 1);
        dispatch(STATUS_WAITING());
      } else dispatch(STATUS_COMPLETED());
    } else if (statusPoint === pointStatus.idle) setGame(gameItems[0]);
  }, [game, gameItems, statusPoint, index, dispatch]);

  // Here we can made the progress bar to work
  useEffect(() => {
    if (loader.isRunning) {
      interval = setInterval(() => {
        dispatch(INCREMENT_LOADER());
      }, 10);
    } else clearInterval(interval);
  }, [loader.isRunning]);

  // So the progress wont break and stop
  useEffect(() => {
    if (loader.progress === 100) {
      dispatch(STOP_LOADER());
      clearInterval(interval);
    }
  }, [loader.progress]);

  return (
    <div className="flex justify-center flex-col items-center w-full h-full drop-shadow-md text-white">
      <div className="w-80 md:w-96">
        {!loader?.isRunning && statusPoint !== pointStatus.completed ? (
          <div>
            <GameImageDisplay game={game} />
            <OptionsList game={game} />
          </div>
        ) : statusPoint === pointStatus.completed ? (
          <h2 className="text-2xl mt-32">You scored: {points} point(s)</h2>
        ) : (
          <div className="mt-32">
            <h2 className="text-2xl mb-5">Loading next game</h2>
            <ProgressBar progress={loader.progress} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizWrapper;
