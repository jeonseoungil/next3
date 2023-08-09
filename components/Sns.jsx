"use client";
import { SNS_OPTIONS } from "@/contains";
import styles from "./sns.module.css";

export const Sns = () => {
  return (
    <ul className={styles.sns}>
      {SNS_OPTIONS.map((item) => (
        <li key={item.id}>
          <a href={item.url} target="_blenk">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
