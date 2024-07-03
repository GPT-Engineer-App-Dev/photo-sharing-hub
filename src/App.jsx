import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, LogIn, UserPlus, Upload, Image } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import UploadPhoto from "./pages/UploadPhoto.jsx";
import Feed from "./pages/Feed.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Register",
    to: "/register",
    icon: <UserPlus className="h-4 w-4" />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogIn className="h-4 w-4" />,
  },
  {
    title: "Upload Photo",
    to: "/upload",
    icon: <Upload className="h-4 w-4" />,
  },
  {
    title: "Feed",
    to: "/feed",
    icon: <Image className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="upload" element={<UploadPhoto />} />
              <Route path="feed" element={<Feed />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;