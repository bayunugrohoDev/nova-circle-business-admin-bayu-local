interface CardProps {
  children: React.ReactNode;
  title: string;
}
const Card = (props: CardProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          {props.title}
        </h3>
      </div>

      {props.children}
    </div>
  );
};

export default Card;
