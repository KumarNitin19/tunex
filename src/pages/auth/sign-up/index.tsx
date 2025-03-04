import LOGO_DARK from "../../../assets/tunex-dark.svg";
import Button from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import CardWithGradientBorder from "../CardWithGradientBorder";

function SignIn() {
  const signInWithGooglePopup = () => {};

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-pattern bg-cover">
      <CardWithGradientBorder>
        <div className="min-w-[566px] min-h-[348px] flex flex-col items-center justify-center gap-6">
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
            onClick={signInWithGooglePopup}
            variant="outline"
            className="flex items-center  gap-3 ">
            <Icon icon="logos:google-icon" />
            Sign In With Google
          </Button>
        </div>
      </CardWithGradientBorder>
    </div>
  );
}

export default SignIn;
