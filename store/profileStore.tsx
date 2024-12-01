import { create } from "zustand";

type ProfileStore = {
  name: string;
  phone: string;
  email: string;
  address: string;
  changeName: (newName: string) => void;
  changePhone: (newPhone: string) => void;
  changeEmail: (newEmail: string) => void;
  changeAddress: (newAddress: string) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  name: "Tran Huu Phuc",
  phone: "+84944968352",
  email: "huuphuctran42@gmail.com",
  address: "District 8, Ho Chi Minh City",
  changeName: (newName) =>
    set((state) => ({
      name: newName,
    })),
  changePhone: (newPhone) =>
    set((state) => ({
      phone: newPhone,
    })),
  changeEmail: (newEmail) =>
    set((state) => ({
      email: newEmail,
    })),
  changeAddress: (newAddress) =>
    set((state) => ({
      address: newAddress,
    })),
}));
