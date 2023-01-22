import Subheader from "@/components/subheader";
import TopBar from "@/components/topbar";
import styles from "@/styles/Home.module.css";
import Sidebar from '../components/sidebar'
import MainContent from "./maincontent";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Sidebar/>
        <div className={styles.content}>
          <TopBar/>
          <Subheader/>
          <MainContent/>
        </div>
      </main>
    </>
  );
}
