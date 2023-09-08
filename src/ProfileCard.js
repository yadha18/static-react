export default function ProfileCard({ title, handle, image, alt, desc }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-3by3">
            <img src={image} alt={alt} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={image} alt={alt} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{handle}</p>
            </div>
          </div>
          <div class="content">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
