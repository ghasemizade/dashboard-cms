import Charts from "../components/charts/Charts";
import Features from "../components/features/Features";
import clsx from 'clsx'
import Transactions from "../components/transactions/Transaction";

export default function Home() {
  return (
      <div className={clsx(
        "flex flex-col",
        "min-h-screen",
      )}>
        <Features />
        <Charts title={"Monthly Sales"}/>
        <Transactions />
      </div>
  )
}
