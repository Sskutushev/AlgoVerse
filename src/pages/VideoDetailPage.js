import React from 'react';
import CommentSection from '../components/CommentSection';

const VideoDetailPage = ({ video, onBack }) => {
  if (!video) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-main hover:text-main-dark mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="font-tt-travels text-3xl font-bold text-text-black">{video.title}</h2>
      </div>
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={video.videoUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="prose max-w-none text-text-grey leading-relaxed mt-6 mb-8" dangerouslySetInnerHTML={{ __html: video.description }}></div>
      
      <CommentSection comments={video.comments} />
    </div>
  );
};

export default VideoDetailPage;
