import "../../public/css/devProfile.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Developers() {
  return (
    <div className="dev-prof">
      <Slide>
        <div className="each-slide-effect">
          <div className="slide-div">
            <div className="dev-pic">
              <img
                className="profile-pic"
                src="https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/316815983_3411722662392344_7145735778609190500_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4fP5w7P7hNoAX8gC7VG&tn=1f8Xq7vFn9mIMb2e&_nc_ht=scontent.fmnl25-5.fna&oh=00_AfDARtcyYsTHxqQ32fZGSI3vQrl_Yc34H2SXP_Wh-Og9lQ&oe=63EEB6BB"
                alt="profile-pic"
              />
              <div className="dev-name">John Mac Molin Millares</div>
              <div className="dev-role">Developer</div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
