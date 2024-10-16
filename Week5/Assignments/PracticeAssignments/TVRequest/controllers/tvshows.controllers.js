import { tvShows } from "../models/tv.models.js";

const apiController = {
  getAllTvShows: (req, res) => {
    console.log(tvShows);
    res.json(tvShows);
  },
  getTvShowsByYear: (req, res) => {
    const tvShowsByYear = tvShows.filter(
      (shows) => shows.yearCreated == req.params.year
    );
    console.log(tvShowsByYear);
    res.json(tvShowsByYear);
  },
  deleteTvShowByTitle: (req, res) => {
    const titleRecieved = req.params.title;
    const index = tvShows.findIndex((shows) => shows.tvShow == titleRecieved);

    if (index !== -1) {
      tvShows.splice(index, 1);
      console.log(tvShows);
      res.json(tvShows);
    } else {
      res.status(404).json({ message: `tvshow ${titleRecieved} not found` });
    }
  },

  patchTvShowStarring: (req, res) => {
    const titleReceived = req.params.title;
    const newStarring = req.body.starring;
    const index = tvShows.findIndex((show) => show.tvShow === titleReceived);

    if (index !== -1) {
      tvShows[index].starring = newStarring;
      res.json(tvShows[index]);
    } else {
      res.json({ error: `TV show "${titleReceived}" not found` });
    }
  },

  postAddNewTvShow: (req, res) => {
    tvShows.push(req.body);
    console.log(tvShows);
    res.json(tvShows);
  },
};
export default apiController;
