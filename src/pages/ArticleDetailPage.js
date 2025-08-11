import React from 'react';
import CommentSection from '../components/CommentSection';

const ArticleDetailPage = ({ article, onBack }) => {
  if (!article) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-main hover:text-main-dark mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="font-tt-travels text-3xl font-bold text-text-black">{article.title}</h2>
      </div>
      {article.image && (
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      )}
      <div className="prose max-w-none text-text-grey leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: article.fullContent }}></div>
      
      <CommentSection comments={article.comments} />
    </div>
  );
};

export default ArticleDetailPage;
