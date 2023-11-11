interface Props {
  date: string;
  time: string;
  guests: { adults: number; children: number };
  restart: () => void;
}

export default function Result({ date, time, guests, restart }: Props) {
  return (
    <div className="flex flex-col text-center bg-Midnight text-white p-6 rounded-3xl">
      <div>
        <p>You Reserved this Activity</p>
        <p>
          On {date} at {time},
        </p>
        <p></p>
        <span>
          <span>
            <p>
              With {guests.adults} {guests.adults > 1 ? "Adults" : "Adult"}{" "}
              {guests.children && `${guests.adults} ${guests.adults > 1 ? "Children" : "Child"}`}
            </p>
          </span>
        </span>
      </div>
      <button className="bg-primary rounded-full" onClick={restart}>
        Restart
      </button>
    </div>
  );
}
