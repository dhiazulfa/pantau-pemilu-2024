import {
  pdpdCalonList,
  pdpdTpsAdministrasi,
  pdpdTpsChart,
  pdpdTpsList,
} from "@/db/schema/dpd";
import { pdprDapilCalonList, pdprDapilList, pdprTps } from "@/db/schema/dpr";
import { partai } from "@/db/schema/partai";
import { ppwpTps } from "@/db/schema/presiden";
import { wilayah } from "@/db/schema/wilayah";

export const dbSchema = {
  wilayah,
  ppwpTps,
  pdprTps,
  pdprDapilList,
  pdprDapilCalonList,
  partai,

  // ----------------- DPD -----------------
  pdpdTpsList,
  pdpdCalonList,
  pdpdTpsAdministrasi,
  pdpdTpsChart,
};
