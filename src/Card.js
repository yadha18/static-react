import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

export default function Card() {
  return (
    <div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                alt="Alexa Logo"
                desc="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                alt="Cortana Logo"
                desc="Cortana was created by Microsoft."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                alt="Siri Logo"
                desc="Siri was created by Apple and helps you to answer your question."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
