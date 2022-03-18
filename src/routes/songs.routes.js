import { Router } from "express";
import { genreModel as Genre, songModel as Song, userModel } from "../models";

const router = Router();

router.get("/", async (req, res) => {
    const songs = await Song.find()
  res.json({
    message: "music list",
  })
});

router.post("/:name", (req, res) => {
  res.json({
    message: "music list",
  });
});

router.put("/:id", (req, res) => {
  res.send("upading a music");
});

router.delete("/", (req, res) =>
  res.json({
    message: "music list",
  })
);

export default router;
