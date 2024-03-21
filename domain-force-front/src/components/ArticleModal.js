import React from 'react';

function ArticleModal({ isOpen, onClose, children}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button className="modal-close-button" onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default ArticleModal;
