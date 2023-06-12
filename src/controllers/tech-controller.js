import { techData } from "../models/technology.js";

const getTech = async (req, res) => {
  try {
    const { name } = req.params;
    const getFile = await techData.findOne({ name });
    res.status(200).json({ message: "Well Done!!!", getFile });
  } catch (error) {
    res.status(500).json({ error: error, message: "Error!!!" });
  }
};

export default getTech;
