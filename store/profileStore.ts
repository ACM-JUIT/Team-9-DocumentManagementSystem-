import { create } from "zustand";

interface ProfileStore {
  profileImage: string | null;

  setProfileImage: (image: string | null) => void;

  clearProfile: () => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profileImage: null,

  setProfileImage: (image) =>
    set({
      profileImage: image,
    }),

  clearProfile: () =>
    set({
      profileImage: null,
    }),
}));