import { APIFetch } from "./fetch";
require('dotenv').config();
import { expectedMovieData } from "./movieData";
import { expectedMovieList } from "./movieList";
import { expectedMovieVideo } from "./movieVideo";
import { expectedMovieCredits } from "./movieCredits";
import { expectedMovieMultiSearch } from "./movieMultiSearch";

async function main() {
    const data= await APIFetch("/movie/550");
    // console.log("Get Movie Data", JSON.stringify(data));
    // console.log("Get Movie Data", MovieData);
    console.log("Movie Data is expeced? ", JSON.stringify(data).substring(0,100)===expectedMovieData.substring(0,100));

    const movieList= await APIFetch("/genre/movie/list");
    // console.log("Get Genre Movie List", movieList);
    console.log("Genre Movie List is expected? ", JSON.stringify(movieList).substring(0,100)===expectedMovieList.substring(0,100));

    const movieTrailerDetails= await APIFetch("/movie/550/videos");
    // console.log("Get Movie Trailer Details", movieTrailerDetails);
    console.log("Movie Trailer Details is expected? ", JSON.stringify(movieTrailerDetails).substring(0,100)===expectedMovieVideo.substring(0,100));

    const credits= await APIFetch("/movie/550/credits");
    // console.log("Get Movie Credits", credits);
    console.log("Movie Credits is expected? ", JSON.stringify(credits).substring(0,100)===expectedMovieCredits.substring(0,100));

    const multiSearch= await APIFetch("/search/multi", [
        { param: "language", value: "en-US" },
        { param: "page", value: "1" },
        { param: "include_adult", value: "false" },
        { param: "query", value: "family" },
      ]);
    // console.log("Get Movie Mulit Search Details", multiSearch);
    console.log("Movie Mulit Search Details is expected? ", JSON.stringify(multiSearch).substring(0,100)===expectedMovieMultiSearch.substring(0,100));
  };

main();