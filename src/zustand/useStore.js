import { create } from "zustand";
import { weatherSlice } from "./slices/weather-slice";
import { languageSlice } from "./slices/language-slice";

const useStore = create((...a) => ({
  ...weatherSlice(...a),
  ...languageSlice(...a),
}));

export default useStore;
