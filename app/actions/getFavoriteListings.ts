import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListings() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return [];
  }
  const favorites = await prisma?.listing.findMany({
    where: {
      id: {
        in: [...(currentUser.favoriteIds || [])],
      },
    },
  });

  const safeFavorites = favorites?.map((favorite) => ({
    ...favorite,
    createdAt: favorite.createdAt.toISOString(),
  }));
  return safeFavorites;
}
