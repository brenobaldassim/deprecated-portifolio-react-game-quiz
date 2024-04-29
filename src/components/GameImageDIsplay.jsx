const GameImageDisplay = (props) => {
  return (
    <div className="mt-10 mb-20 w-72 md:80 w-full flex items-center justify-center">
      <img
        className="w-72"
        alt="image_selected"
        src={props?.game?.background_image}
      />
    </div>
  );
};

export default GameImageDisplay;
