import Message from "../../models/contactus.model.js";

export async function deleteMessage(req, res) {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: "Message not found!" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error(
      "Error occurred while deleting message: error in delete message controller",
      error
    );
    res.status(500).json({ message: "Internal server error" });
  }
}
