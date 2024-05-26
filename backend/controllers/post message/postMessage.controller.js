import Message from "../../models/contactus.model.js";

export async function postMessage(req, res) {
  try {
    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    if (!newMessage) {
      return res.status(400).json({ message: "Message not sent" });
    }
    const message = await newMessage.save();
    res.status(200).json({
      message: "Message sent successfully",
      data: {
        id: message._id,
        name: message.name,
        email: message.email,
        phone: message.phone,
        message: message.message,
        createdAt: new Date(message.createdAt).toString(),
        updatedAt: new Date(message.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error(
      "Error occurred while posting message: error in post message controllers",
      error
    );
    res.status(500).json({ message: "Internal server error" });
  }
}
