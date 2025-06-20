import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Header} from './dashboard/_components/Header';
import { Import } from "lucide-react";
import HowitWorks from './dashboard/_components/HowitWorks';
import Homes from'./dashboard/_components/Homes'

export default function Home() {
  return (
  <div>
   <Header/>
   <Homes/>
    <HowitWorks/>

  </div>
  );
}
