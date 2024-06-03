import { tokenName } from "@/app/store";

export const authorizationHeaders = typeof localStorage !== "undefined" && {
  Authorization: `Bearer ${localStorage.getItem(tokenName)}`,
};
