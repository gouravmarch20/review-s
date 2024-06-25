import React from 'react';

const ChatResponse = ({ response }) => {
  // Replace {{{ }}} placeholders with a span for styling
  const formattedResponse = response.replace(/\{{3}(.*?)\}{3}/g, '<span class="highlight">$1</span>');

  return (
    <div className="chat-response" dangerouslySetInnerHTML={{ __html: formattedResponse }} />
  );
};

export default ChatResponse;
