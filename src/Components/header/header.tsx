type Props = {
  city?: string;
  country?: string;
  date: string;
  day: number;
};
const Header = ({ city, country, date, day }: Props) => {
  return (
    <header className="flex items-center justify-between ">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {city}, {country}
        </p>
      </div>
      <div className="text-right flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {day === 0 ? "(Today)" : day === 1 ? "(Tomorrow)" : `(After Tomorrow)`}
        </p>
      </div>
    </header>
  );
};
export default Header;
