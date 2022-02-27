import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const data = [
    {
      id: "e1",
      title: "Helicopter",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Big Screen TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "New Car",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseItem
        id={data[0].id}
        title={data[0].title}
        amount={data[0].amount}
        date={data[0].date}
      />
      <ExpenseItem
        id={data[1].id}
        title={data[1].title}
        amount={data[0].amount}
        date={data[1].date}
      />
      <ExpenseItem
        id={data[2].id}
        title={data[2].title}
        amount={data[2].amount}
        date={data[2].date}
      />
      <ExpenseItem
        id={data[3].id}
        title={data[3].title}
        amount={data[3].amount}
        date={data[3].date}
      />
    </div>
  );
}

export default App;
