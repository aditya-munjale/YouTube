import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoData, setVideoData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    if (videoId) {
      fetchVideoData(videoId);
    }
  }, [videoId]);

  const fetchVideoData = async (id) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        setVideoData(data.items[0]);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  if (!videoId) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">No video selected</h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Video Player */}
        <div className="bg-black rounded-xl overflow-hidden mb-6">
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>

        {/* Video Info */}
        {videoData ? (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {videoData.snippet?.title}
            </h1>
            
            {/* Video Stats and Actions */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-gray-700">
                    {videoData.snippet?.channelTitle?.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {videoData.snippet?.channelTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {videoData.statistics?.viewCount ? 
                     parseInt(videoData.statistics.viewCount).toLocaleString() : '0'} views
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                  <span className="text-lg">👍</span>
                  <span className="text-sm font-medium">
                    {videoData.statistics?.likeCount ? 
                     parseInt(videoData.statistics.likeCount).toLocaleString() : '0'}
                  </span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                  <span className="text-lg">👎</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </div>

            {/* Video Description */}
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-800 whitespace-pre-line">
                {videoData.snippet?.description}
              </p>
            </div>
          </div>
        ) : (
          // Loading Skeleton
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-20 h-10 bg-gray-200 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-10 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        )}

        {/* Comments Section - Placeholder */}
        <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comments</h2>
          <p className="text-gray-600 text-center py-4">
            Comments section would go here
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;