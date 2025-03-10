import prisma from "@/app/libs/prismadb";

interface Iparams {
  listingId?: string;
}

export default async function getListingById(params: Iparams) {
  try {
    const { listingId } = params;
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });
    return {
      ...listing,
      createdAt: listing?.createdAt.toISOString(),
      user: {
        ...listing?.user,
        createdAt: listing?.createdAt.toISOString(),
        updatedAt: listing?.user.updatedAt.toISOString(),
        emailVerified: listing?.user.emailVerified?.toISOString(),
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}



// return listing of needed item using id //