const Pill = () => {
  // selected and hover + big
  const selected = false;
  return (
    <div
      className={`pill absolute left-0 w-1 bg-white z-10 rounded-tr-lg rounded-br-lg transition-all duration-200 ease-in-out
            ${
              selected
                ? "h-10"
                : "h-0 -left-2 group-hover:h-5 group-hover:left-0"
            }`}
    ></div>
  );
};

export default Pill;
