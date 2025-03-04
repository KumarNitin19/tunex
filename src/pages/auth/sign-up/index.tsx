import { useState } from "react";
import LOGO_DARK from "../../../assets/tunex-dark.svg";
import Button from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import CardWithGradientBorder from "../../../molecules/CardWithGradientBorder";
import { IdTokenResult, signInWithPopup, signOut } from "@firebase/auth";
import { auth, googleProvider } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useSnackbar from "../../../hooks/useSnackbar";
import Loader from "../../../atoms/Loader";
import BACKGROUD_IMAGE from "../../../assets/bg-pattern.png";

function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const { addSnackbar } = useSnackbar();

  //Sign-in with google
  const signInWithGooglePopup = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        try {
          const user = result.user;
          const userClaims: IdTokenResult = await user.getIdTokenResult();
          if (user && userClaims) {
            setItem("userDetails", {
              ...user,
            });
            navigate("/");
            addSnackbar({
              message: "Logged In successfully!!",
              variant: "success",
            });
          }
        } catch (error) {
          console.log(error);
          await signOut(auth);
          addSnackbar({
            message: "Login failed, try again!!",
            variant: "error",
          });
        } finally {
          setIsLoading(false);
        }
      })
      .catch((_error) => {
        console.log(_error);
      });
  };

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
            onClick={signInWithGooglePopup}
            variant="outline"
            className="flex items-center gap-3 py-2">
            <Icon icon="logos:google-icon" />
            Sign In With Google
          </Button>
        </div>
      </CardWithGradientBorder>
      <Loader loading={isLoading} />
    </div>
  );
}

export default SignIn;
