import React from "react";

function App() {
  const [messages, setMessages] = React.useState(["a"]);

  return (
    <div>
      {messages.length === 0 ? (
        <h1>You're all caught up</h1>
      ) : (
        <h1>
          You have {messages.length}{" "}
          {messages.length === 1 ? "message" : "messages"}
          {/* or you could write it like below
          {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>} */}
        </h1>
      )}
    </div>
  );
}

export default App;
