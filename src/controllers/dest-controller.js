import { destData } from "../models/info.js";

const getDest = async (req, res) => {
  try {
    const { name } = req.params;
    const destination = await destData.findOne({ name });
    res.status(200).json({ message: "Done!!!", destination });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export default getDest;
