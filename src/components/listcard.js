import React from "react";
import styles from "@/styles/ListCard.module.css";
import {
  CheckListIcon,
  DescriptionIcon,
  ListLinkIcon,
  MessageIcon,
  UserStarIcon,
} from "./Icons";
import Link from "next/link";
import Image from "next/image";
export default function ListCard(props) {
  return (
    <div className={`${styles.listCard} ${props.subType === 'pin' && styles.pinCard}`}>
      <div className={styles.listCardTop}>
        <div className={styles.listTopLeft}>
          <div className={`${styles.dotList} ${props.type === 'inprocess' ? styles.yellowBg : styles.pinkBg}`}></div>
          <div className={styles.listCardHead}>ContactRM</div>
        </div>
        {props.subType !== "pin" &&
        <div className={styles.listTopRight}>
          <UserStarIcon />
        </div>
        }
      </div>
      <div className={styles.listCardTitle}>Design a website</div>
      {props.type === "backlog" &&
      <div className={styles.cardListLinks}>
        <Link href="/" className={`${styles.cardLink} ${styles.linkBrown}`}>
          api.contactrm.com
        </Link>
        <Link href="/" className={`${styles.cardLink} ${styles.linkPink}`}>
          api.contactrm
        </Link>
      </div>
      }
      {props.type === "inreview" &&
      <div className={styles.cardListLinks}>
        <Link href="/" className={`${styles.cardLink} ${styles.linkBrown}`}>
          api.contactrm.com
        </Link>
        <Link href="/" className={`${styles.cardLink} ${styles.linkPink}`}>
          api.contactrm
        </Link>
      </div>
      }
      {props.type === "completed" &&
      <div className={styles.cardListLinks}>
        <Link href="/" className={`${styles.cardLink} ${styles.linkBrown}`}>
          api.contactrm.com
        </Link>
        <Link href="/" className={`${styles.cardLink} ${styles.linkPink}`}>
          api.contactrm
        </Link>
      </div>
      }
      {props.type === "todo" && (
        <div className={styles.cardListProgress}>
          <div className={`${styles.progressList} ${styles.pGreen}`}></div>
          <div className={`${styles.progressList} ${styles.pPink}`}></div>
        </div>
      )}
      <div className={styles.cardActions}>
        <div className={styles.cardDesc}>
          <DescriptionIcon />
        </div>
        {props.type === 'backlog' &&
        <div className={styles.cardCheckList}>
          <CheckListIcon />
          <div className={styles.checkListCount}>10/12</div>
        </div>
        }
        {props.type === 'todo' &&
        <>
          <div className={styles.cardMsg}>
            <MessageIcon />
            <div className={styles.msgCount}>12</div>
          </div>
          <div className={styles.cardCheckList}>
            <CheckListIcon />
            <div className={styles.checkListCount}>10/12</div>
          </div>
          <div className={styles.cardLinkList}>
            <ListLinkIcon />
            <div className={styles.linkCount}>2</div>
          </div>
          </>
        }
        {props.type === 'inprocess' &&
        <>
          <div className={styles.cardMsg}>
            <MessageIcon />
            <div className={styles.msgCount}>12</div>
          </div>
          <div className={styles.cardCheckList}>
            <CheckListIcon />
            <div className={styles.checkListCount}>10/12</div>
          </div>
          <div className={styles.cardLinkList}>
            <ListLinkIcon />
            <div className={styles.linkCount}>2</div>
          </div>
          </>
        }
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardDate}>Created 3 days ago</div>
        <div className={styles.cardImage}>
          <Image
            src="/assets/images/userTop.png"
            alt="userTop"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}
