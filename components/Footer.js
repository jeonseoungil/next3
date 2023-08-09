"use client";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`inner ${styles.footer_inner}`}>
        <h2>
          <p>연락처 : 010-000-0000</p>
          <p>© 2023. 전성일. All rights reserved.</p>
        </h2>
      </div>
    </footer>
  );
};
