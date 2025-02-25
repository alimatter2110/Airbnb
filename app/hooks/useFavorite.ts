import { useRouter } from "next/navigation";
import { SafeUser } from "../types";

import useLoginModal from "./useLoginModal";
import { useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  /* 
    const list = currentUser?.favoriteIds || []
    const hasFavorited = (currentUser?.favoriteIds || []).includes(listingId)
  */

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasFavorited) {
        request = axios.delete(`/api/favorites/${listingId}`);
      } else {
        request = axios.post(`/api/favorites/${listingId}`);
      }

      await request;
      router.refresh();
      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
