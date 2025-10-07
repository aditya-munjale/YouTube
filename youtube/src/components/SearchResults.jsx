// components/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (query) {
      searchVideos(query);
    }
  }, [query]);

  const searchVideos = async (searchQuery) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${GOOGLE_API_KEY}&q=${searchQuery}`
    );
    const json = await response.json();
    setVideos(json.items || []);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} info={video} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
