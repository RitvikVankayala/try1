import UploadPage from "../components/UploadPage";
import Cors from "cors";
const cors = Cors();
export default function Home() {
  return (
    <div>
      <UploadPage />
    </div>
  );
}
