type TempItem = {
  title: string;
  value: string | number;
};

type TempProps = {
  items: TempItem[];
  temp?: "C" | "F";
};

const Temp = ({ items, temp = "C" }: TempProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 bg-bg/50 dark:bg-bg-dark/70 p-2 rounded-2xl mt-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-bg/80 dark:bg-bg-dark/70 p-2 rounded-2xl text-center text-black dark:text-white flex flex-col items-center justify-around"
        >
          <p className="text-sm opacity-80">{item.title}</p>
          <p className="text-lg font-semibold">
            {item.value}°{temp}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Temp;
