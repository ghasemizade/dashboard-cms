import clsx from "clsx";
import FeaturesBox from "./FeaturesBox";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

export default function Features(){

    return(
        <div className={clsx(
            "md:flex md:justify-evenly md:flex-row flex flex-col",
            "w-full",
            "mt-10",
        )}>
            <FeaturesBox 
                title={"Revanue"} 
                price={"2,125"} 
                indicator={"-10.6"}
                desc={"comapared to last month"}
                indicatorIcon={<BiDownArrowAlt color="tomato"/>}/>
            <FeaturesBox 
                title={"Sales"} 
                price={"4,025"} 
                indicator={"-1.3"}
                desc={"comapared to last month"}
                indicatorIcon={<BiDownArrowAlt color="tomato"/>}/>
            <FeaturesBox 
                title={"Cost"} 
                price={"2,325"} 
                indicator={"+3.4"}
                desc={"comapared to last month"}
                indicatorIcon={<BiUpArrowAlt color="green"/>}/>
        </div>
    )
}