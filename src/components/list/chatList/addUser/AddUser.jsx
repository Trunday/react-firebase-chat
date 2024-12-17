import "./addUser.css";

const AddUser = () => {
  return (
    <div className="adduser">
      <form>
        <input type="text" placeholder="Kullanıcı Adı" name="username" />
        <button>Ara</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Musa Büyükkaba</span>
        </div>
        <button>Kullanıcı Ekle</button>
      </div>
    </div>
  );
};

export default AddUser;
