import jwt from "jsonwebtoken";
import { Router } from "express";

const router = Router();

router.post("/refresh-token", async (req, res) => {
  const { refreshtoken } = req.body;

  if (!refreshtoken) {
    return res.status(401).json({ message: "You are not authorized" });
  }

  try {
    const decoded = jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET);

    const accessToken = jwt.sign(
      { id: decoded.id, email: decoded.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" },
    );

    return res.status(200).json({ accessToken });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Refresh token is invalid or expired" });
  }
});

export default router;
