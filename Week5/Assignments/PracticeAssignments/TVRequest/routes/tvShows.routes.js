import { Router } from "express";
import apiController from "../controllers/tvshows.controllers.js";

const router = Router();

router
  .route("/tvShows")
  .get(apiController.getAllTvShows)
  .post(apiController.postAddNewTvShow);

router.route("/tvShows/:year").get(apiController.getTvShowsByYear);

router
  .route("/tvShows/:title")
  .delete(apiController.deleteTvShowByTitle)
  .patch(apiController.patchTvShowStarring);

export default router;
