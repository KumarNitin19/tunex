import { useCallback } from "react";
import LOGO_DARK from "../../../assets/tunex-dark.svg";
import Button from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import CardWithGradientBorder from "../../../molecules/CardWithGradientBorder";
import BACKGROUD_IMAGE from "../../../assets/bg-pattern.png";
import "./style.css";

// Sign In Page
function SignIn() {
  const signUpWithSpotify = useCallback(() => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_APP_REDIRECT_URI;
    const api_uri = import.meta.env.VITE_APP_SPOTIFY_URI;
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];

    window.location.href = `${api_uri}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }, []);

  return (
    <div
      className="flex items-center justify-center w-full h-full bg-cover"
      style={{
        backgroundImage: `url(${BACKGROUD_IMAGE})`,
      }}>
      <CardWithGradientBorder>
        <div className="min-w-fit min-h-fit md:min-w-[566px] md:min-h-[348px] flex flex-col items-center justify-center gap-6 p-6">
          <div className="flex gap-2">
            <img src={LOGO_DARK} alt="TuneX Logo" height={32} width={32} />
            <span className="text-4xl text-main-text-light font-bold">
              TuneX
            </span>
          </div>
          <span className="text-center text-sub-text-light">
            One stop platform for all your <br /> music cravings!!
          </span>
          <Button
            onClick={signUpWithSpotify}
            variant="outline"
            className="sign-in-with-spotify-button flex items-center gap-3 !py-2">
            <Icon
              className="spotify-icon"
              icon="logos:spotify-icon"
              fontSize={24}
            />
            Sign In With Spotify
          </Button>
        </div>
      </CardWithGradientBorder>
    </div>
  );
}

export default SignIn;
