import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Musa Büyükkaba</h2>
        <p>Lorem ipsum, dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Sohbet Ayarları</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Gizlilik & Yardım</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Paylaşılan Resimler</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/29633889/pexels-photo-29633889.jpeg"
                  alt=""
                />
                <span>photo_24_new.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/29633889/pexels-photo-29633889.jpeg"
                  alt=""
                />
                <span>photo_24_new.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Paylaşılan Dosyalar.</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Engelle</button>
      </div>
    </div>
  );
};

export default Detail;
