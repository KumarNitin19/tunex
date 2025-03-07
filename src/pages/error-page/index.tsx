import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

// 404 page to handle
function ErrorPage() {
  const navigate = useNavigate();

  // navigate to dashboard
  const goToDashboard = () => navigate("/");
  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <span className="text-7xl font-bold">404</span>
      <span className="font-light text-lg">Page Not Found</span>
      <Button onClick={goToDashboard}>Dashboard</Button>
    </div>
  );
}

export default ErrorPage;
