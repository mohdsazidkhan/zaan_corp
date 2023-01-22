import ListItem from "@/components/listitem";
import styles from "@/styles/MainContent.module.css";
export default function MainContent() {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.innerContent}>
          <ListItem type={'backlog'} title={'Backlog'}/>
          <ListItem type={'todo'} title={'To Do'}/>
          <ListItem type={'inprocess'} title={'In Process'}/>
          <ListItem type={'inreview'} title={'In Review'}/>
          <ListItem type={'completed'} title={'Completed'}/>
        </div>
      </div>
    </>
  );
}
