import React, { useState } from 'react';

const CommentSection = ({ comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    const comment = {
      id: comments.length + 1,
      author: 'Current User', // Replace with actual user data
      avatar: 'https://placehold.co/32x32/808080/fff?text=CU', // Placeholder avatar
      text: newComment,
      likes: 0,
      timestamp: new Date().toLocaleString(),
    };
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl mb-4">Комментарии ({comments.length})</h3>
      <div className="space-y-4 mb-6">
        {comments.length === 0 ? (
          <p className="text-text-grey">Пока нет комментариев. Будьте первым!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="flex items-start gap-3 bg-grey-1 p-4 rounded-lg">
              <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full" />
              <div className="flex-grow">
                <p className="font-semibold text-sm">{comment.author} <span className="text-text-grey text-xs ml-2">{comment.timestamp}</span></p>
                <p className="text-text-black text-sm">{comment.text}</p>
                <div className="flex items-center gap-3 text-xs text-text-grey mt-2">
                  <button className="flex items-center gap-1 hover:text-main">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span>{comment.likes}</span>
                  </button>
                  <button className="hover:text-main">Ответить</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center gap-2">
        <textarea
          className="flex-grow p-3 border border-grey-2 rounded-lg resize-none focus:outline-none focus:border-main"
          rows="2"
          placeholder="Напишите комментарий..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="bg-main text-white px-4 py-2 rounded-lg font-semibold hover:bg-main-light transition-colors"
          onClick={handleAddComment}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
