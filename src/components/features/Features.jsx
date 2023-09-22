import clsx from "clsx";
import FeaturesBox from "./FeaturesBox";


export default function Features(){

    return(
        <div className={clsx(
            "flex justify-evenly",
            "w-full",
            "mt-10"
        )}>
            <FeaturesBox />
            <FeaturesBox />
            <FeaturesBox />
        </div>
    )
}