
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div>

      {/* navbar */}
      <Header/>

      {/* feeds */}
      <Feed/>
    </div>
  );
}
