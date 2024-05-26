import Message from "../../models/contactus.model.js";
export async function getMessage(req, res) {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error occurred while fetching messages: error in get message controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
