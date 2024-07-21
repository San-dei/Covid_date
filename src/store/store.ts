import { DateCovid } from "@/interface/main";
import { create } from "zustand";

interface CovidState {
  favorits: DateCovid[];
}

interface CovidActions {
  addFavorits: (item: DateCovid) => void;
  delete: (item: DateCovid) => void;
}

const useCovid = create<CovidActions & CovidState>((set) => ({
  favorits: [],

  addFavorits: (item) =>
    set((state) => {
      let comparation = state.favorits.find((result) => result.state == item.state);

      if (!comparation) {
        alert("Se agrego a favoritos");
        return { favorits: [...state.favorits, item] };
      } else {
        return { favorits: [...state.favorits] };
      }
    }),

  delete: (item) =>
    set((state) => {
        let comparation = state.favorits.filter((dates)=> dates.hash !== item.hash)

        return { favorits: comparation };
    }),
}));

export default useCovid;
