import "./addUser.css";

const AddUser = () => {
  return (
    <div className="adduser">
      <form>
        <input type="text" placeholder="Kullanıcı Adı" name="username" />
        <button>Ara</button>
      </form>
      <div className="user"></div>
    </div>
  );
};

export default AddUser;
