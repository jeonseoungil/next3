import styles from "./about.module.css";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/Si";

export const About = () => {
  return (
    <section id="about" className={`con`}>
      <div className="inner">
        <h2>About me</h2>
        <div className={styles.about_wrap}>
          <article className={styles.pic}>
            <img src="/about/img1.jpg" alt="" />
          </article>
          <article className={styles.desc}>
            <h3>전성일</h3>
            <ul>
              <li>
                <b>이름</b>: <strong>전성일</strong>
              </li>
              <li>
                <b>연락처</b>: <strong>010-000-0000</strong>
              </li>
              <li>
                <b>생년월일</b>: <strong>94.04.04</strong>
              </li>
              <li>
                <b>주소</b>: <strong>인천시 만수동</strong>
              </li>
              <li>
                <b>이메일</b>: <strong>lyola2511@naver.com</strong>
              </li>
              <li>
                <b>학력</b>: <strong>대학졸업</strong>
              </li>
              <li>
                <b>훈련 이력</b>:<strong>AWS 프론트엔드 과정 수료</strong>
              </li>
            </ul>
            <p>
              <a
                href="https://github.com/jeonseoungil?tab=repositories"
                target="_blank"
              >
                <i>
                  <AiFillGithub />
                </i>
              </a>
              <a href="#" target="_blank">
                <i>
                  <SiNotion />
                </i>
              </a>
            </p>
          </article>
        </div>

        <div className={styles.about_bottom}>
          Frontend를 목표로 하는 주니어 개발자입니다.
          <br />
          Frontend 를 공부하고 열심히 개발에 대한 관심사를 넓혀나가고 있습니다.
          <br />
          성실하게 , 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고
          싶습니다.
          <br />
        </div>
      </div>
    </section>
  );
};
