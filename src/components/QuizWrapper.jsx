import { useEffect, useState } from "react";
import { getAllGenres } from "../redux/endpoints/genres_endpoints";
import { getAllGames } from "../redux/endpoints/games_endpoints";
import { useSelector, useDispatch } from "react-redux";
import { promiseStatus } from "../redux/constants/constants";
import { STATUS_WAITING } from "../redux/store/pointSlice";
import { pointStatus } from "../redux/constants/constants";
import OptionsList from "./OptionsList";
import GameImageDisplay from "./GameImageDIsplay";

const QuizWrapper = () => {
  const { status: statusGenre } = useSelector((state) => state.genre);
  const { gameItems, status: statusGame } = useSelector((state) => state.game);
  const { status: statusPoint } = useSelector((state) => state.point);
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
      setGame(gameItems[index]);
      if (gameItems.length > index) setIndex(index + 1);
      dispatch(STATUS_WAITING());
    } else if (statusPoint === pointStatus.idle) setGame(gameItems[0]);
  }, [game, gameItems, statusPoint, index, dispatch]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-80 md:w-96">
        <GameImageDisplay game={game} />
        <OptionsList game={game} />
      </div>
    </div>
  );
};

export default QuizWrapper;
