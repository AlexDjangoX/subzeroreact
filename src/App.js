import Expenses from "./components/Expenses/ExpensesList";

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
      <Expenses data={data} />
    </div>
  );
}

export default App;
