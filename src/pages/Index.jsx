import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to PhotoShare</h1>
      <p className="mb-4">Share your moments with the world.</p>
      <div className="space-x-2">
        <Button asChild>
          <Link to="/register">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;