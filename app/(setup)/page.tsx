import { initialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
    const profile = await initialProfile()
    return <div>Create a Server </div>;
};

export default SetupPage;