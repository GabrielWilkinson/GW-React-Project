import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Car Insurance',
     amount: 294.67}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <pe>This is also visible!</pe>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}
export default App;
