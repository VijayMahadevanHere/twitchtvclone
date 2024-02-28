import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Topbar from "./components/topbar"

export default function Home() {
  return (
    <main >
      <Topbar/>
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </main>
  );
}
