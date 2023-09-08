import { Recipe } from "./Recipe"

export default function LatestRecipes() {
    return (
        <div>
            <h1 className="text-4xl text-center font-medium my-14">Latest recipes</h1>
            <div className="flex flex-row flex-wrap justify-center gap-10 mb-14">
                <Recipe image="/assets/latest/latest_1.jpg" description="French croissant with butter and peach jam" />
                <Recipe image="/assets/latest/latest_2.jpg" description="Creamy tomato soup" />
                <Recipe image="/assets/latest/latest_3.jpg" description="Grilled chicken breast with cooked rice and string-peas" />
                <Recipe image="/assets/latest/latest_4.jpg" description="Raspberry jam and vanilla cream cake" />
            </div>
        </div>
    )
}