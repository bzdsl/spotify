import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    //check if user exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      //create user
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Failed to create user", error);
    res.status(500).json({ success: false });
  }
};
