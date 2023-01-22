import React, { useState } from "react";
import styles from "@/styles/ListItem.module.css";
import {
  BluePlusIcon,
  DotMenuIcon,
  DropCloseIcon,
  FilterListIcon,
  RedCloseIcon,
  SortByIcon,
  SortListIcon,
} from "./Icons";
import ListCard from "./listcard";
import Link from "next/link";
import Image from "next/image";

export default function ListItem(props) {
  const [showAddCard, setShowAddCard] = useState(false);
  const [showCardNames, setShowCardNames] = useState(false);
  const [showListMenu, setShowListMenu] = useState(false);
  const [showSortByMenu, setShowSortByMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const handleFocusCardNames = () => {
    setShowCardNames(true);
  };
  const handleBlurCardNames = () => {
    setShowCardNames(false);
  };

  const handleShowAddCard = () => {
    setShowAddCard(true);
  };
  const handleHideAddCard = () => {
    setShowAddCard(false);
  };

  const handleShowListAction = () => {
    setShowListMenu(true);
  };
  const handleCloseListAction = () => {
    setShowListMenu(false);
  };

  const handleShowSortByMenu = () => {
    setShowSortByMenu(true);
  };
  const handleCloseSortByMenu = () => {
    setShowSortByMenu(false);
  };

  const handleShowFilterMenu = () => {
    setShowFilterMenu(true);
  };
  const handleCloseFilterMenu = () => {
    setShowFilterMenu(false);
  };
  return (
    <div className={styles.listItem}>
      <div className={styles.listItemTop}>
        <div className={styles.listHeadTop}>
          <div className={styles.listHeading}>
            {props.type === "backlog" && props.title}
            {props.type === "todo" && props.title}
            {props.type === "inprocess" && props.title}
            {props.type === "inreview" && props.title}
            {props.type === "completed" && props.title}
          </div>
          <div className={styles.listCount}>(2)</div>
          <div className={styles.listFilter} onClick={handleShowFilterMenu}>
            <FilterListIcon />
          </div>
          <div className={styles.listSort} onClick={handleShowSortByMenu}>
            <SortListIcon />
          </div>
          {showFilterMenu && (
            <div
              className={`${styles.listActionDropdown} ${styles.filterDrop} ${props.type === "backlog" ? styles.leftPosition : styles.leftPositionrightPosition}`}
            >
              <div className={styles.actionDropTop}>
                <div className={styles.actionDropTitle}>Filter by</div>
                <div
                  className={styles.actionDropClose}
                  onClick={handleCloseFilterMenu}
                >
                  <DropCloseIcon />
                </div>
              </div>
              <div className={styles.dropProjects}>
                <div className={styles.filterHead}>Projects</div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1" checked/>
                  </div>
                  <div className={`${styles.cardColor} ${styles.pinkBg}`}></div>
                  <div className={styles.cardText}>ContactRM</div>
                </div>
                <div className={`${styles.cardGroup} ${styles.selected}`}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1" />
                  </div>
                  <div
                    className={`${styles.cardColor} ${styles.yellowBg}`}
                  ></div>
                  <div className={styles.cardText}>AgentBook</div>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1" />
                  </div>
                  <div className={`${styles.cardColor} ${styles.blueBg}`}></div>
                  <div className={styles.cardText}>W4RTeam</div>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1" />
                  </div>
                  <div
                    className={`${styles.cardColor} ${styles.lightBlueBg}`}
                  ></div>
                  <div className={styles.cardText}>LeadBank</div>
                </div>
                <Link className={styles.linkShowAll} href="/">Show all...</Link>

                <div className={`${styles.filterHead} ${styles.mt16}`}>Tags</div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1"/>
                  </div>
                  <Link href="/" className={`${styles.cardLink} ${styles.linkBrown}`}>
                    api.contactrm
                  </Link>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1"/>
                  </div>
                  <Link href="/" className={`${styles.cardLink} ${styles.linkPink}`}>
                    api.contactrm
                  </Link>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1"/>
                  </div>
                  <Link href="/" className={`${styles.cardLink} ${styles.linkGreen}`}>
                    api.contactrm
                  </Link>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1" />
                  </div>
                  <Link href="/" className={`${styles.cardLink} ${styles.linkGrayGreen}`}>
                    api.contactrm
                  </Link>
                </div>
                <Link className={styles.linkShowAll} href="/">Show all...</Link>

                <div className={`${styles.filterHead} ${styles.mt16}`}>Assigned To</div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1" checked/>
                  </div>
                  <div className={styles.cardImage}>
                    <Image
                      src="/assets/images/user1.png"
                      alt="user1"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.cardText}>Savannah Nguyen</div>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1"/>
                  </div>
                  <div className={styles.cardImage}>
                    <Image
                      src="/assets/images/user2.png"
                      alt="user2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.cardText}>Wade Warren</div>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1" />
                  </div>
                  <div className={styles.cardImage}>
                    <Image
                      src="/assets/images/user3.png"
                      alt="user3"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.cardText}>Jhon Doe</div>
                </div>
                <div className={styles.cardGroup}>
                  <div className={styles.cardCheckbox}>
                    <input type="checkbox" value="1"/>
                  </div>
                  <div className={styles.cardImage}>
                    <Image
                      src="/assets/images/user4.png"
                      alt="user4"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.cardText}>Jane Cooper</div>
                </div>
                <Link className={styles.linkShowAll} href="/">Show all...</Link>
              </div>
              <div className={styles.filterDropBottom}>
                <div className={styles.bottomLink}>Clear</div>
                <div className={styles.bottomBtn}>Apply</div>
              </div>
            </div>
          )}
          {showSortByMenu && (
            <div className={`${styles.listActionDropdown} ${styles.sortBy} ${props.type === "backlog" ? styles.leftPosition : styles.rightPosition}`}>
              <div className={styles.actionDropTop}>
                <div className={styles.actionDropTitle}>
                  <SortByIcon />
                  <span style={{ marginLeft: "6px" }}>Sort by</span>
                </div>
                <div
                  className={styles.actionDropClose}
                  onClick={handleCloseSortByMenu}
                >
                  <DropCloseIcon />
                </div>
              </div>
              <div className={styles.actionItems}>
                <div className={styles.actionItem}>Order</div>
                <div className={styles.actionItem}>Created date</div>
                <div className={styles.actionItem}>Due date</div>
                <div className={styles.actionItem}>Sitting count</div>
                <div className={styles.actionItem}>Move count</div>
              </div>
            </div>
          )}
        </div>
        <div onClick={handleShowListAction}>
          <div className={styles.listMenu}>
            <DotMenuIcon />
          </div>
        </div>
        {showListMenu && (
          <div className={`${styles.listActionDropdown} ${props.type === "backlog" ? styles.leftPosition : styles.rightPosition}`}>
            <div className={styles.actionDropTop}>
              <div className={styles.actionDropTitle}>List Actions</div>
              <div
                className={styles.actionDropClose}
                onClick={handleCloseListAction}
              >
                <DropCloseIcon />
              </div>
            </div>
            <div className={styles.actionItems}>
              <div className={styles.actionItem}>
                Move all cards in this list
              </div>
              <div className={styles.actionItem}>
                Archive all cards in this list
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        {props.type === "backlog" && (
          <>
            <ListCard type={props.type} title={"Backlog"} />
          </>
        )}
        {props.type === "todo" && (
          <>
            <ListCard type={props.type} title={"To Do"} />
            <ListCard type={props.type} title={"To Do"} />
            <ListCard type={props.type} title={"To Do"} />
            <ListCard type={props.type} title={"To Do"} />
            <ListCard type={props.type} title={"To Do"} />
          </>
        )}
        {props.type === "inprocess" && (
          <>
            <ListCard type={props.type} title={"In Process"} />
            <ListCard type={props.type} title={"In Process"} />
            <ListCard type={props.type} title={"In Process"} />
            <ListCard type={props.type} title={"In Process"} />
            <ListCard type={props.type} title={"In Process"} />
            <ListCard type={props.type} title={"In Process"} />
            <ListCard type={props.type} title={"In Process"} />
            <ListCard type={props.type} title={"In Process"} />
          </>
        )}
        {props.type === "inreview" && (
          <>
            <ListCard type={props.type} title={"In Review"} />
            <ListCard type={props.type} title={"In Review"} />
            <ListCard type={props.type} title={"In Review"} />
            <ListCard type={props.type} title={"In Review"} />
            <ListCard type={props.type} title={"In Review"} />
          </>
        )}
        {props.type === "completed" && (
          <ListCard type={props.type} title={"Completed"} />
        )}
        {props.type !== "completed" && (
          <>
            {!showAddCard && (
              <div className={styles.addCardBtn} onClick={handleShowAddCard}>
                <BluePlusIcon />
                <span className={styles.addBtnText}>Add Card</span>
              </div>
            )}
            {showAddCard && (
              <div className={styles.addCardGroup}>
                <div className={styles.addCardTop}>
                  <span className={styles.addCardTitle}>Card Title</span>
                  <span onClick={handleHideAddCard}>
                    <RedCloseIcon />
                  </span>
                </div>
                <div className={styles.cardTextarea}>
                  <textarea
                    onFocus={handleFocusCardNames}
                    onBlur={handleBlurCardNames}
                    rows={3}
                    placeholder="Enter Card name"
                  ></textarea>
                </div>
                <div className={styles.addCardBottom}>
                  <select>
                    <option defaultValue="">Select Project</option>
                    <option value={0}>Project One</option>
                    <option value={1}>Project Two</option>
                    <option value={2}>Project Three</option>
                  </select>
                  <button className={styles.addBlueBtn}>Add</button>
                </div>
                {showCardNames && (
                  <div className={styles.cardNames}>
                    <div className={styles.cardGroup}>
                      <div
                        className={`${styles.cardColor} ${styles.pinkBg}`}
                      ></div>
                      <div className={styles.cardText}>ContactRM</div>
                    </div>
                    <div className={`${styles.cardGroup} ${styles.selected}`}>
                      <div
                        className={`${styles.cardColor} ${styles.yellowBg}`}
                      ></div>
                      <div className={styles.cardText}>AgentBook</div>
                    </div>
                    <div className={styles.cardGroup}>
                      <div
                        className={`${styles.cardColor} ${styles.blueBg}`}
                      ></div>
                      <div className={styles.cardText}>W4RTeam</div>
                    </div>
                    <div className={styles.cardGroup}>
                      <div
                        className={`${styles.cardColor} ${styles.lightBlueBg}`}
                      ></div>
                      <div className={styles.cardText}>LeadBank</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
