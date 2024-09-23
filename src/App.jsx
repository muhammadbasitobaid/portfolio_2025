import EmailIcon from "src/components/shared/icons/EmailIcon";
import GithubIcon from "src/components/shared/icons/GithubIcon";
import LinkedInIcon from "src/components/shared/icons/LinkedInIcon";
import TwitterIcon from "src/components/shared/icons/TwitterIcon";
import UpworkIcon from "src/components/shared/icons/UpworkIcon";
import BagIcon from "src/components/shared/icons/BagIcon";
import FolderIcon from "src/components/shared/icons/FolderIcon";
import HomeIcon from "src/components/shared/icons/HomeIcon";
import ThoughtsIcon from "src/components/shared/icons/ThoughtsIcon";
import ToolIcon from "src/components/shared/icons/ToolIcon";
import "src/index.css";

const App = () => {
  return (
    <div className="flex space-x-4 bg-black">
      <BagIcon />
      <FolderIcon />
      <HomeIcon />
      <ThoughtsIcon />
      <TwitterIcon />
      <EmailIcon />
      <GithubIcon />
      <LinkedInIcon />
      <UpworkIcon />
      <ToolIcon />
    </div>
  );
};

export default App;
