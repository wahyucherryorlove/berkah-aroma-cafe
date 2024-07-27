import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@libs/supabase";

export default async function getOrders(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase
    .from("tbl_order")
    .select(
      `id, id_menu, id_user, quantity, status, tbl_menu(id, name, price, images)`
    );

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
