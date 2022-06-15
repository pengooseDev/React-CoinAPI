import { atom } from "recoil";

/*atom({
    key: "uniqueKey"
    default: "defaultValue"
})*/

export const isDarkAtom = atom({
    key: "isDark",
    default: true,
});
