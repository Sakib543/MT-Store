// eslint-disable-next-line react/prop-types
const Title = ({title,titleStyles}) => {
  return (
    <div className={`${titleStyles} pb-20`}>
      <span className="h2 uppercase pb-1 relative after:w-2/3 after:h-1 after:bg-red-600 after:absolute 
      after:bottom-1 after:right-0 after:rounded">
        {title}
      </span>
    </div>
  );
};

export default Title;
