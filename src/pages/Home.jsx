import Charts from "../components/charts/Charts";
import Features from "../components/features/Features";
import clsx from 'clsx'

export default function Home() {
  return (
      <>
        <div className={clsx(
          "flex flex-col",
          "min-h-screen"
        )}>
          <Features />
          <Charts />
        </div>
      </>
  )
}
