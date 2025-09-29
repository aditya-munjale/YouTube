import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 text-sm leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-xs mb-1 font-medium">{channelTitle}</p>
        <p className="text-gray-500 text-xs">
          {statistics?.viewCount
            ? parseInt(statistics.viewCount).toLocaleString()
            : "0"}{" "}
          views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
