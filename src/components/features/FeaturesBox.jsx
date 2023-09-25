import clsx from "clsx";


export default function FeaturesBox({title, price, indicator, indicatorIcon, desc}) {

    return(
        <div className={clsx(
            "w-80 h-40",
            "rounded",
            "shadow hover:shadow-md",
        )}>
           <div className={clsx(
            "mx-8 mb-8 h-full",
            "flex flex-col items-start justify-evenly",
           )}>
            <h2 className={clsx(
                    "text-slate-700"
                )}>
                    {title}
                </h2>
                <div className={clsx(
                    "flex items-center"
                )}>
                    <p className={clsx(
                        "mr-5",
                        "text-2xl font-medium text-slate-700"
                    )}>
                        ${price}
                    </p>
                    <div className={clsx(
                        "text-slate-500",
                        "flex items-center"
                    )}>
                        <p className={clsx(
                            "text-xs",
                            "mr-2"
                        )}>
                            {indicator}
                        </p>
                        <p className={clsx(
                            "text-xl"
                        )}>
                            {indicatorIcon}
                        </p>
                    </div>
                </div>
                {desc}
           </div>
        </div>
    )
}