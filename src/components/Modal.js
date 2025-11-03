import React from "react";

// A simple reusable modal component.
// Props:
// - isOpen: boolean to control visibility
// - title: string title displayed at the top
// - children: modal body content
// - actions: React node(s) rendered in the footer (e.g., buttons)
// - onClose: callback to close the modal (overlay click or close button)
export default function Modal({ isOpen, title, children, actions, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="modal-title">{title}</h3>
          <button className="modal-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {actions ? <div className="modal-footer">{actions}</div> : null}
      </div>
    </div>
  );
}
