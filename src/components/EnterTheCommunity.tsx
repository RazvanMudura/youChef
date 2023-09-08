import { CommunityElement } from "./CommunityElement"

export default function EnterTheCommunity() {

    return (
        <div className="bg-gray-200">
            <h1 className="text-4xl text-center font-medium py-14">Enter the community</h1>
            <div className="flex flex-row flex-wrap justify-evenly gap-10 pb-14">
                <CommunityElement image="/assets/community_1.png" title="Find recipes" description="Exploy the recipes selected by our staff, uploaded by our community" />
                <CommunityElement image="/assets/community_2.png" title="Review recipes" description="Evaluate and comment on the dishes proposed by others" />
                <CommunityElement image="/assets/community_3.png" title="Add recipes" description="Pass on your know-how by proposing your recipes" />
            </div>
        </div>
    )
}