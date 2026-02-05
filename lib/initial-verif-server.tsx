import { RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";
import { redirect } from "next/navigation";

export const initialVerifyServer = async () => {
  const user = await currentUser();
  if (!user) return <RedirectToSignIn />;
  try {
    const server = await prisma.server.findFirst({
      where: {
        members: {
          some: {
            profileId: user.id,
          },
        },
      },
    });
    if (server) {
      return redirect(`/servers/${server.id}`);
    }
    return null;
  } catch (error) {
    throw new Error("Failed to create initial profile", { cause: error });
  }
};
