import React from "react";
import Image from "next/image";
import styles from "@/styles/TopBar.module.css";
import {
  AnnouncementIcon,
  CalendarIcon,
  ChatIcon,
  DarkIcon,
  DownArrowTop,
  PlusWhiteIcon,
  SearchIcon,
} from "./Icons";
export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.insideTopbar}>
        <div className={styles.leftPart}>
          <div className={styles.leftTopPersons}>
            <div className={styles.leftPerson}>
              <Image
                src="/assets/images/person1.png"
                alt="person1"
                width={30}
                height={30}
              />
              <div className={styles.person1}>15</div>
            </div>
            <div className={styles.rightPerson}>
              <Image
                src="/assets/images/person2.png"
                alt="person2"
                width={30}
                height={30}
              />
              <div className={styles.person2}>11</div>
            </div>
          </div>
          <div className={styles.rightDown}>
            <DownArrowTop />
          </div>
          <div className={styles.rightDark}>
            <DarkIcon />
          </div>
          <div className={styles.plusWhite}>
            <PlusWhiteIcon />
          </div>
        </div>
        <div className={styles.centerPart}>
          <div className={styles.searchInput}>
            <SearchIcon />
            <input type="text" id="search" name="search" placeholder="Search"/>
          </div>
        </div>
        <div className={styles.rightPart}>
          <div className={styles.announcementTop}>
            <AnnouncementIcon />
          </div>
          <div className={styles.calendarTop}>
            <CalendarIcon />
          </div>
          <div className={styles.chatTop}>
            <ChatIcon />
          </div>
          <div className={styles.userTop}>
            <Image
              src="/assets/images/userTop.png"
              alt="userTop"
              width={38}
              height={38}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
