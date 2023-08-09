import styles from "./skills.module.css";
import "./skills.css";

const skillList = [
  { id: 1, text: "HTML", css: "html", per: "95%" },
  { id: 2, text: "CSS", css: "css", per: "95%" },
  { id: 3, text: "JAVASCRIPT", css: "javascript", per: "90%" },
  { id: 4, text: "REACT", css: "react", per: "90%" },
  { id: 5, text: "NODEJS", css: "nodejs", per: "40%" },
  { id: 6, text: "REACTJS", css: "reactjs", per: "70%" },
  { id: 7, text: "EXPRESSJS", css: "expressjs", per: "75%" },
];
const imgList = [
  { id: 1, imgurl: "/skills/ajax.png", text: "ajax" },
  { id: 2, imgurl: "/skills/algorithm.png", text: "algorithm" },
  { id: 3, imgurl: "/skills/amazon.svg", text: "amazon" },
  { id: 4, imgurl: "/skills/aws.png", text: "aws" },
  { id: 5, imgurl: "/skills/css.png", text: "css" },
  { id: 6, imgurl: "/skills/doker.png", text: "doker" },
  { id: 7, imgurl: "/skills/figma.png", text: "figma" },
  { id: 8, imgurl: "/skills/git.png", text: "git" },
  { id: 9, imgurl: "/skills/github.png", text: "github" },
  { id: 10, imgurl: "/skills/html5.png", text: "html5" },
  { id: 11, imgurl: "/skills/java.png", text: "java" },
  { id: 12, imgurl: "/skills/js.png", text: "js" },
  { id: 13, imgurl: "/skills/mysql.png", text: "mysql" },
  { id: 14, imgurl: "/skills/network.png", text: "network" },
  { id: 15, imgurl: "/skills/next.svg", text: "next" },
  { id: 16, imgurl: "/skills/node.png", text: "node" },
  { id: 17, imgurl: "/skills/node1.png", text: "node1" },
  { id: 18, imgurl: "/skills/notion.png", text: "notion" },
  { id: 19, imgurl: "/skills/phython.svg", text: "phython" },
  { id: 20, imgurl: "/skills/react.png", text: "react" },
  { id: 21, imgurl: "/skills/redux.png", text: "redux" },
  { id: 22, imgurl: "/skills/sass.png", text: "sass" },
  { id: 23, imgurl: "/skills/slack.jpg", text: "slack" },
  { id: 24, imgurl: "/skills/sys.png", text: "sys" },
];
export const Skills = () => {
  return (
    <section id="skills" className={`con ${styles.skills_wrap}`}>
      <div className="inner">
        <h2>Skills </h2>
        <div className={styles.skills_box}>
          <article>
            {skillList.map((item) => (
              <div className={styles.skill_box}>
                <span className={styles.title}>{item.text}</span>
                <div className={styles.skill_bar}>
                  <span className={`${styles.skill_per} ${item.css}`}>
                    <span className={styles.tooltip}>{item.per}</span>
                  </span>
                </div>
              </div>
            ))}
          </article>
          <article>
            <ul className={styles.list}>
              {imgList.map((item) => (
                <li key={item.id}>
                  <img src={item.imgurl} alt="" />
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
