
import { FileText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  showText?: boolean;
}

const Logo = ({ showText = true }: LogoProps) => {
  return (
    <Link to="/" className="inline-flex items-center gap-2">
      <div className="flex items-center">
        <FileText className="h-5 w-5 text-black" />
        <Wrench className="h-4 w-4 text-primary -ml-1" />
      </div>
      {showText && (
        <span className="text-xl font-bold">
          <span className="text-black">PD</span>
          <span className="text-primary">Fixit</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
