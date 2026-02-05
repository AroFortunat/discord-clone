import { InitialModals } from "@/components/modals/initial-modals";
import { initialProfile } from "@/lib/initial-profile";
import { initialVerifyServer } from "@/lib/initial-verif-server";

const SetupPage = async () => {
  const profile = await initialProfile();
  const initialServer = await initialVerifyServer();
  return (
    <div>
      <InitialModals />
    </div>
  );
};

export default SetupPage;
