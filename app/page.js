import Image from "next/image";
import { Button } from "@/components/ui/button"
import LandingPage from "./dashboard/_component/LandingPage";
import LandingHeader from "./dashboard/_component/LandingHeader";


export default function Home() {
  return (
    <div>
      <LandingHeader/>
      <LandingPage/>
    </div>
  );
}
