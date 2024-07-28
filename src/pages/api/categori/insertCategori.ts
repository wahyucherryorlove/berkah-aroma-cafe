import type { NextApiResponse, NextApiRequest } from "next";
import { supabase } from "@libs/supabase";

export default async function InsertCategori(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name } = req.body;

    const { data, error } = await supabase
      .from("tbl_categori")
      .insert([{ name }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ data });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
