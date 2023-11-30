interface CardProps {
  children: React.ReactNode;
  title: string;
  addElementOnHeader?: React.ReactNode;
}
const Card = (props: CardProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 flex justify-between items-center">
        {props.title && (
          <h3 className="font-medium text-black dark:text-white">
            {props.title}
          </h3>
        )}
        <div className="">{props.addElementOnHeader}</div>
      </div>
      <div className="py-4 px-6.5">{props.children}</div>
    </div>
  );
};

export default Card;
