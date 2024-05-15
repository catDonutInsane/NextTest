import Image from "next/image";
import styles from "./page.module.css";
import Search from "@/components/search";
import "./globals.css"
export default function Home() {
  return (
    <main class="main">
      <Search></Search>
    </main>
  );
}
