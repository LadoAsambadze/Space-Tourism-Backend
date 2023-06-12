import getData from "../models/crew.js";

const getCrew = async (req, res) => {
  try {
    const { name } = req.params;
    const getFile = await getData.findOne({ name });
    res.status(200).json({ message: "Well Done!!!", getFile });
    console.log(getFile);
  } catch (error) {
    res.status(500).json({ message: "Erorr!!!", err: error });
  }
};

export default getCrew;
