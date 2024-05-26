import Auth from "../../models/auth.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await Auth.find();
    res.status(200).send(users);
  } catch (error) {
    console.log("Something went wrong in get User controller", error);
    res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await Auth.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    console.log("Something went wrong in delete User controller", error);
    res.status(404).json({ message: error.message });
  }
};
