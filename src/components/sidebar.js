import React, { useState } from "react";
import styles from "@/styles/Sidebar.module.css";
import { DownArrow, DoubleLeftArrow, DashboardIcon, WorkflowIcon, CalendarIcon, SocialRMIcon, MetricsIcon, LeadsIcon, NotificationsIcon, UsersIcon, DocumentsIcon, SegmentsIcon, CompanyIcon } from "./Icons";
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={styles.sidebar} style={{ width: !showSidebar ? "90px" : "270px" }}>
      <div className={styles.logo}>
        <div className={styles.logoLeft}>
          <div className={styles.logoCircle}></div>
          {showSidebar && (
            <>
              <div className={styles.logoLabel}>Zaan Corp</div>
              <div className={styles.logoDown}>
                <DownArrow />
              </div>
            </>
          )}
        </div>
        <div className={styles.leftMenuToggle} onClick={handleSidebar} style={{ transform: !showSidebar ? 'rotate(180deg)' : 'rotate(0deg)'}}>
          <DoubleLeftArrow />
        </div>
      </div>
      <div className={styles.leftSideMenu}>
        <div className={styles.leftMenuItem}>
          <div className={styles.leftMenuIcon}>
            <DashboardIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Dashboard</div>}
        </div>
        <div className={`${styles.leftMenuItem} ${styles.active}`}>
          <div className={styles.leftMenuIcon}>
            <WorkflowIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Workflow</div>}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
            <CalendarIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Calendar</div>}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
            <SocialRMIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>SocialRM</div>}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
            <MetricsIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Metrics</div>}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
            <LeadsIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Leads</div>}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
           <UsersIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Users</div>}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
            <NotificationsIcon/>
          </div>
          {showSidebar && (
            <div className={styles.leftMenuLabel}>Notifications</div>
          )}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
           <DocumentsIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Documents</div>}
        </div>
        <div className={`${styles.leftMenuItem}`}>
          <div className={styles.leftMenuIcon}>
            <SegmentsIcon/>
          </div>
          {showSidebar && <div className={styles.leftMenuLabel}>Segments</div>}
        </div>
      </div>
      <div className={`${styles.leftMenuItem}`}>
        <div className={styles.leftMenuIcon}>
          <CompanyIcon/>
        </div>
        {showSidebar && <div className={styles.leftMenuLabel}>Company</div>}
      </div>
    </div>
  );
}
