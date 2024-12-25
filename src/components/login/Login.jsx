import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Hesap oluşturuldu. Şimdi giriş yapa bilirsiniz.");
    } catch (err) {
      console.log(err);
      toast.warning(err.message);
    } finally {
      setLoading(false);
    }

    //  console.log(username);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // toast.warn("Selam");

    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const { email, password } = Object.fromEntries(formData);

      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Giriş başarılı");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Hoşgeldin,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Şifre" name="password" />
          <button disabled={loading}>
            {loading ? "Yükleniyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Hesap Oluştur</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Resim Yükle...
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Kullanıcı Adı" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Şifre" name="password" />
          <button disabled={loading}>
            {loading ? "Yükleniyor..." : "Kaydol"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
