import { RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";

export const initialProfile = async () => {
  const user = await currentUser();
  if (!user) return <RedirectToSignIn />;
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: user.id,
      },
    });
    if (profile) return profile;
    const newProfile = await prisma.profile.create({
      data: {
        userId: user.id,
        name:`${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
    return newProfile;
  } catch (error) {
    throw new Error("Failed to create initial profile", { cause: error });
  }
};
