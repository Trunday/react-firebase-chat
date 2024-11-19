import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
            <img src="./search.png" alt="" />
            <input type="text" placeholder="Ara"/>
        </div>
        <img src="./plus.png" alt="" />
      </div>
    </div>
  );
};

export default ChatList;
