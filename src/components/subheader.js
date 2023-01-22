import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Subheader.module.css";
import {
  WorkFlowWhiteIcon,
  DesignIcon,
  CodeIcon,
  AnnounceSmallIcon,
  PinIcon,
  DounbleFileIcon,
  SaveIcon,
  FilterIcon,
  DropCloseIcon,
  SortByIcon,
  DropFbigIcon,
  DeleteIcon,
  MenuSearchIcon,
  ArchiveMenuIcon,
  SnoozeMenuIcon,
} from "./Icons";
import Link from "next/link";
import ListCard from "./listcard";
export default function Subheader() {
  const [showSortByMenu, setShowSortByMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showSelectCheckboxes, setShowSelectCheckboxes] = useState(false);
  const [showViewMenu, setShowViewMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPinMenu, setShowPinMenu] = useState(false);
  const [showArchiveMenu, setShowArchiveMenu] = useState(false);
  const [archiveRadioActive, setArchiveRadioActive] = useState("archive");

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

  const handleShowSaveView = () => {
    setShowFilterMenu(false);
    setShowSaveModal(true);
  };

  const handleCloseSaveModal = () => {
    setShowSaveModal(false);
  };

  const handleSelectCheckboxes = () => {
    setShowSelectCheckboxes(!showSelectCheckboxes);
  };

  const handleShowViewMenu = () => {
    setShowViewMenu(true);
  };

  const handleCloseViewMenu = () => {
    setShowViewMenu(false);
  };

  const handleShowDeleteModal = () => {
    setShowViewMenu(false);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleShowPinMenu = () => {
    setShowPinMenu(true);
  };

  const handleClosePinMenu = () => {
    setShowPinMenu(false);
  };

  const handleShowArchiveMenu = () => {
    setShowArchiveMenu(true);
  };

  const handleCloseArchiveMenu = () => {
    setShowArchiveMenu(false);
  };

  const onArchiveSnooze = (e) => {
    setArchiveRadioActive(e.target.value);
  };

  return (
    <>
      <div className={styles.subHeader}>
        <div className={styles.insideSubheader}>
          <div className={styles.leftPart}>
            <div className={styles.workflow}>Workflow</div>
            <div className={styles.workflowWhite}>
              <WorkFlowWhiteIcon />
            </div>
            <div className={styles.grayBgIcon}>
              <DesignIcon />
            </div>
            <div className={styles.grayBgIcon}>
              <CodeIcon />
            </div>
            <div className={styles.grayBgIcon}>
              <AnnounceSmallIcon />
            </div>
            <div className={styles.subUsersBox}>
              <div className={styles.subUserBox}>
                <Image
                  src="/assets/images/user1.png"
                  alt="user1"
                  width={30}
                  height={30}
                />
                <div className={styles.blueCircle}>2</div>
              </div>
              <div className={styles.subUserBox}>
                <Image
                  src="/assets/images/user2.png"
                  alt="user2"
                  width={30}
                  height={30}
                />
                <div className={styles.blueCircle}>5</div>
              </div>
              <div className={styles.subUserBox}>
                <Image
                  src="/assets/images/user3.png"
                  alt="user3"
                  width={30}
                  height={30}
                />
                <div className={styles.blueCircle}>1</div>
              </div>
              <div className={styles.subUserBox}>
                <Image
                  src="/assets/images/user4.png"
                  alt="user4"
                  width={30}
                  height={30}
                />
                <div className={styles.blueCircle}>4</div>
              </div>
            </div>
          </div>
          <div className={styles.rightPart}>
            <div className={styles.pinIcon} onClick={handleShowPinMenu}>
              <PinIcon />
            </div>
            <div className={styles.dounbleFile} onClick={handleShowArchiveMenu}>
              <DounbleFileIcon />
            </div>
            <div className={styles.labelWithIcon} onClick={handleShowViewMenu}>
              <SaveIcon />
              <div className={styles.labelIcon}>Views</div>
            </div>
            <div
              className={styles.labelWithIcon}
              onClick={handleShowFilterMenu}
            >
              <FilterIcon />
              <div className={styles.labelIcon}>Filter</div>
            </div>
            <div
              className={styles.labelWithIcon}
              onClick={handleShowSortByMenu}
            >
              <SortByIcon />
              <div className={styles.labelIcon}>Sort by</div>
            </div>
            {showPinMenu && (
              <div className={`${styles.listActionDropdown} ${styles.pinMenu}`}>
                <div className={styles.actionDropTop}>
                  <div className={styles.actionDropTitle}>
                    <PinIcon />
                    <span style={{ marginLeft: "6px" }}>Pinned Card</span>
                  </div>
                  <div
                    className={styles.actionDropClose}
                    onClick={handleClosePinMenu}
                  >
                    <DropCloseIcon />
                  </div>
                </div>
                <div className={styles.menuTopSearch}>
                  <MenuSearchIcon />
                  <input type="text" name="searchPin" placeholder="Search" />
                </div>
                <div className={`${styles.actionItems} ${styles.pinCardList}`}>
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                </div>
              </div>
            )}
            {showArchiveMenu && (
              <div
                className={`${styles.listActionDropdown} ${styles.archiveMenu}`}
              >
                <div className={styles.actionDropTop}>
                  <div className={styles.radioTabs}>
                    <input
                      type="radio"
                      name="radioFolder"
                      value="archive"
                      defaultChecked
                      onChange={onArchiveSnooze}
                    />
                    <label
                      htmlFor="archive"
                      style={{ borderRadius: "8px 0px 0px 8px" }}
                    >
                      <ArchiveMenuIcon
                        color={
                          archiveRadioActive === "archive"
                            ? "#ffffff"
                            : "#070F21"
                        }
                      />{" "}
                      <span>Archive</span>
                    </label>

                    <input
                      type="radio"
                      name="radioFolder"
                      value="snooze"
                      onChange={onArchiveSnooze}
                    />
                    <label
                      htmlFor="snooze"
                      style={{ borderRadius: "0px 8px 8px 0px" }}
                    >
                      <SnoozeMenuIcon
                        color={
                          archiveRadioActive === "snooze"
                            ? "#ffffff"
                            : "#070F21"
                        }
                      />{" "}
                      <span>Snooze</span>
                    </label>
                  </div>
                  <div
                    className={styles.actionDropClose}
                    onClick={handleCloseArchiveMenu}
                  >
                    <DropCloseIcon />
                  </div>
                </div>
                <div className={styles.menuTopSearch}>
                  <MenuSearchIcon />
                  <input type="text" name="searchPin" placeholder="Search" />
                </div>
                <div className={`${styles.actionItems} ${styles.pinCardList}`}>
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                  <div className={styles.cardImageArchive}>
                    <Image
                      src="/assets/images/userTop.png"
                      alt="userTop"
                      width={18}
                      height={18}
                    />
                    {archiveRadioActive === "archive" ? (
                      <div className={styles.cardArchiveText}>
                        Archived in{" "}
                        <span className={styles.archiveStatus}>Completed</span>{" "}
                        3 days ago
                      </div>
                    ) : (
                      <div className={styles.cardArchiveText}>
                        Snoozed until{" "}
                        <span className={styles.archiveStatus}>
                          Oct 24 at 10:00 PM
                        </span>
                      </div>
                    )}
                  </div>
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                  <div className={styles.cardImageArchive}>
                    <Image
                      src="/assets/images/userTop.png"
                      alt="userTop"
                      width={18}
                      height={18}
                    />
                    {archiveRadioActive === "archive" ? (
                      <div className={styles.cardArchiveText}>
                        Archived in{" "}
                        <span className={styles.archiveStatus}>Completed</span>{" "}
                        3 days ago
                      </div>
                    ) : (
                      <div className={styles.cardArchiveText}>
                        Snoozed until{" "}
                        <span className={styles.archiveStatus}>
                          Oct 24 at 10:00 PM
                        </span>
                      </div>
                    )}
                  </div>
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                  <div className={styles.cardImageArchive}>
                    <Image
                      src="/assets/images/userTop.png"
                      alt="userTop"
                      width={18}
                      height={18}
                    />
                    {archiveRadioActive === "archive" ? (
                      <div className={styles.cardArchiveText}>
                        Archived in{" "}
                        <span className={styles.archiveStatus}>Completed</span>{" "}
                        3 days ago
                      </div>
                    ) : (
                      <div className={styles.cardArchiveText}>
                        Snoozed until{" "}
                        <span className={styles.archiveStatus}>
                          Oct 24 at 10:00 PM
                        </span>
                      </div>
                    )}
                  </div>
                  <ListCard type="todo" subType="pin" title={"To Do"} />
                  <div className={styles.cardImageArchive}>
                    <Image
                      src="/assets/images/userTop.png"
                      alt="userTop"
                      width={18}
                      height={18}
                    />
                    {archiveRadioActive === "archive" ? (
                      <div className={styles.cardArchiveText}>
                        Archived in{" "}
                        <span className={styles.archiveStatus}>Completed</span>{" "}
                        3 days ago
                      </div>
                    ) : (
                      <div className={styles.cardArchiveText}>
                        Snoozed until{" "}
                        <span className={styles.archiveStatus}>
                          Oct 24 at 10:00 PM
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {showViewMenu && (
              <div
                className={`${styles.listActionDropdown} ${styles.viewMenuSub}`}
              >
                <div className={styles.actionDropTop}>
                  <div className={styles.dropTitleFilter}>
                    <SaveIcon />
                    <span style={{ marginLeft: "6px" }}>Views</span>
                  </div>
                  <div
                    className={styles.actionDropClose}
                    onClick={handleCloseViewMenu}
                  >
                    <DropCloseIcon />
                  </div>
                </div>
                <div className={styles.dropProjects}>
                  <div className={styles.cardGroup}>
                    <div
                      className={`${styles.cardColor} ${styles.blueBg}`}
                    ></div>
                    <div className={styles.cardText}>My first filter</div>
                  </div>
                  <div className={styles.cardGroupFull}>
                    <div className={styles.cardGroup}>
                      <div
                        className={`${styles.cardColor} ${styles.pinkBg}`}
                      ></div>
                      <div className={styles.cardText}>Available for me</div>
                    </div>
                    <div
                      className={styles.delIcon}
                      onClick={handleShowDeleteModal}
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                  <div className={styles.cardGroup}>
                    <div
                      className={`${styles.cardColor} ${styles.lGreenBg}`}
                    ></div>
                    <div className={styles.cardText}>Current Tasks</div>
                  </div>
                  <div className={styles.cardGroup}>
                    <div
                      className={`${styles.cardColor} ${styles.yellowBg}`}
                    ></div>
                    <div className={styles.cardText}>Top Project</div>
                  </div>
                  <div className={styles.cardGroup}>
                    <div
                      className={`${styles.cardColor} ${styles.favBg}`}
                    ></div>
                    <div className={styles.cardText}>Favorites</div>
                  </div>
                </div>
              </div>
            )}
            {showFilterMenu && (
              <div
                className={`${styles.listActionDropdown} ${styles.filterDropSub}`}
              >
                <div className={styles.actionDropTop}>
                  <div className={styles.dropTitleFilter}>
                    <DropFbigIcon />
                    <span style={{ marginLeft: "6px" }}>Filter by</span>
                  </div>
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
                      <input type="checkbox" value="1" />
                    </div>
                    <div className={`${styles.cardText} ${styles.textNoML}`}>
                      No Project Assigned
                    </div>
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" defaultChecked />
                    </div>
                    <div
                      className={`${styles.cardColor} ${styles.pinkBg}`}
                    ></div>
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
                    <div
                      className={`${styles.cardColor} ${styles.blueBg}`}
                    ></div>
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
                  <Link className={styles.linkShowAll} href="/">
                    Show all...
                  </Link>

                  <div className={`${styles.filterHead} ${styles.mt16}`}>
                    Tags
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" />
                    </div>
                    <div className={`${styles.cardText} ${styles.textNoML}`}>
                      No Tags Added
                    </div>
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" defaultChecked />
                    </div>
                    <Link
                      href="/"
                      className={`${styles.cardLink} ${styles.linkBrown}`}
                    >
                      api.contactrm
                    </Link>
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" />
                    </div>
                    <Link
                      href="/"
                      className={`${styles.cardLink} ${styles.linkPink}`}
                    >
                      api.contactrm
                    </Link>
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" />
                    </div>
                    <Link
                      href="/"
                      className={`${styles.cardLink} ${styles.linkGreen}`}
                    >
                      api.contactrm
                    </Link>
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" />
                    </div>
                    <Link
                      href="/"
                      className={`${styles.cardLink} ${styles.linkGrayGreen}`}
                    >
                      api.contactrm
                    </Link>
                  </div>
                  <Link className={styles.linkShowAll} href="/">
                    Show all...
                  </Link>

                  <div className={`${styles.filterHead} ${styles.mt16}`}>
                    Cards
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" defaultChecked />
                    </div>
                    <div className={`${styles.cardText} ${styles.textNoML}`}>
                      Cards I created
                    </div>
                  </div>

                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" />
                    </div>
                    <div className={`${styles.cardText} ${styles.textNoML}`}>
                      Cards assigned to me
                    </div>
                  </div>

                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" />
                    </div>
                    <div className={`${styles.cardText} ${styles.textNoML}`}>
                      All Cards
                    </div>
                  </div>

                  <div className={`${styles.filterHead} ${styles.mt16}`}>
                    Assigned To
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" />
                    </div>
                    <div className={`${styles.cardText} ${styles.textNoML}`}>
                      Nobody Assigned
                    </div>
                  </div>
                  <div className={styles.cardGroup}>
                    <div className={styles.cardCheckbox}>
                      <input type="checkbox" value="1" defaultChecked />
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
                      <input type="checkbox" value="1" />
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
                      <input type="checkbox" value="1" />
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
                  <Link className={styles.linkShowAll} href="/">
                    Show all...
                  </Link>
                </div>
                <div
                  className={`${styles.filterDropBottom} ${styles.filterSave}`}
                >
                  <div
                    className={styles.borderBtn}
                    onClick={handleShowSaveView}
                  >
                    Save as View
                  </div>
                  <div className={styles.bottomFilterR}>
                    <div className={styles.bottomLink}>Clear</div>
                    <div className={styles.bottomBtn}>Apply</div>
                  </div>
                </div>
              </div>
            )}
            {showSortByMenu && (
              <div className={styles.listActionDropdown}>
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
        </div>
      </div>
      {showSaveModal && (
        <div className={styles.saveViewModal}>
          <div className={styles.modalOverlay}></div>
          <div className={styles.modalContainer}>
            <div className={styles.actionDropTop}>
              <div className={styles.actionDropTitle}>
                <SaveIcon />
                <span style={{ marginLeft: "6px" }}>Save as View</span>
              </div>
              <div
                className={styles.actionDropClose}
                onClick={handleCloseSaveModal}
              >
                <DropCloseIcon />
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.inputGroup}>
                <label>View Name</label>
                <input
                  type="text"
                  defaultValue=""
                  name="viewname"
                  className={styles.inputText}
                  placeholder="Enter Name"
                />
                <input
                  type="color"
                  name="favcolor"
                  defaultValue="#000000"
                  className={styles.inputColor}
                />
              </div>
              <div className={`${styles.inputGroup} ${styles.mt16}`}>
                <label>Share with others</label>
                <div className={styles.multiselect}>
                  <div
                    className={styles.selectBox}
                    onClick={handleSelectCheckboxes}
                  >
                    <select>
                      <option>Enter or select name</option>
                    </select>
                    <div className={styles.overSelect}></div>
                  </div>
                  {showSelectCheckboxes && (
                    <div className={styles.checkboxes}>
                      <div className={styles.cardGroup}>
                        <div className={styles.cardCheckbox}>
                          <input type="checkbox" value="1" />
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
                      <div className={`${styles.cardGroup} ${styles.selected}`}>
                        <div className={styles.cardCheckbox}>
                          <input type="checkbox" value="1" />
                        </div>
                        <div className={styles.cardImage}>
                          <Image
                            src="/assets/images/user2.png"
                            alt="user2"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className={styles.cardText}>Dianne Russell</div>
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
                        <div className={styles.cardText}>Bessie Cooper</div>
                      </div>
                      <div className={styles.cardGroup}>
                        <div className={styles.cardCheckbox}>
                          <input type="checkbox" value="1" />
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
                      <div className={styles.cardGroup}>
                        <div className={styles.cardCheckbox}>
                          <input type="checkbox" value="1" />
                        </div>
                        <div className={styles.cardImage}>
                          <Image
                            src="/assets/images/user1.png"
                            alt="user1"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className={styles.cardText}>Cody Fisher</div>
                      </div>
                      <div className={styles.cardGroup}>
                        <div className={styles.cardCheckbox}>
                          <input type="checkbox" value="1" />
                        </div>
                        <div className={styles.cardImage}>
                          <Image
                            src="/assets/images/user2.png"
                            alt="user2"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className={styles.cardText}>Bessie Cooper</div>
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
                        <div className={styles.cardText}>Cody Fisher</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className={`${styles.saveViewModal} ${styles.viewDelModal}`}>
          <div className={styles.modalOverlay}></div>
          <div className={styles.modalContainer}>
            <div className={styles.actionDropTop}>
              <div className={styles.actionDropTitle}>Delete</div>
              <div
                className={styles.actionDropClose}
                onClick={handleCloseDeleteModal}
              >
                <DropCloseIcon />
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.deleteContent}>
                Are you sure you want to delete this Filter?
              </div>
              <div className={styles.modalBottom}>
                <div
                  className={styles.cancelBtn}
                  onClick={handleCloseDeleteModal}
                >
                  Cancel
                </div>
                <div className={styles.deleteBtn}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
