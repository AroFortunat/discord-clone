import { initialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
    const profile = await initialProfile()
    console.log(profile)
    return <div>Create a Server </div>;
};

export default SetupPage;