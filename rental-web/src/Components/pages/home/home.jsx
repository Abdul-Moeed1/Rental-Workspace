import { ImageSlider } from "../productSlider/ImageSlider"
import { Electronics } from "./Electronics/Electronics"

export const Home = () => {
    return (
        <div className=" pt-40 pb-40 overflow-hidden  max-[907px]:pt-41 max-[735px]:pt-28 max-[535px]:pt-24 ">
            <div>
                <ImageSlider/>
            </div>
            <div className="w-[85%] m-auto">
                <Electronics/>
            </div>
        </div>
    )
}