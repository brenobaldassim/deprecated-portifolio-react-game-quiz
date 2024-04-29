import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get4RandomItemsFromArray } from "../utils/utils";
import { promiseStatus } from "../redux/constants/constants";
import { increment } from "../redux/store/pointSlice";

const OptionsList = ({ game }) => {
  const [genreOptions, setGenreOptions] = useState([]);
  const { genreItems, status } = useSelector((state) => state.genre);
  const { points, status: pointStatus } = useSelector((state) => state.point);
  const dispatch = useDispatch();

  // When fetched all the genres it must create a smaller list so I have the options
  // as well be certain that the first genre of the selected game it is part of it.
  useEffect(() => {
    if (
      status === promiseStatus.fulfilled &&
      typeof genreItems !== "undefined" &&
      typeof game !== "undefined"
    ) {
      let genresArr = get4RandomItemsFromArray(genreItems);
      if (
        genresArr?.filter((i) => i.name === game?.genres[0]?.name).length <=
          0 &&
        Boolean(game?.genres[0])
      ) {
        genresArr.pop();
        genresArr.splice(
          ((genresArr.length + 1) * Math.random()) | 0,
          0,
          game?.genres[0],
        );
      }
      setGenreOptions(genresArr);
    }
  }, [genreItems, game]);

  const handleClick = (event) => {
    if (game?.genres[0].id === +event.target.id) dispatch(increment());
  };

  return (
    <div className="w-full flex items-center justify-center">
      {points}
      <ul className="w-72 md:80">
        {genreOptions?.map((genre) => {
          return (
            <li
              className="rounded-md bg-cyan-950 text-white w-full mt-2 p-2 hover:bg-cyan-800 hover:cursor-pointer"
              key={genre.id}
              id={genre.id}
              onClick={handleClick}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionsList;
