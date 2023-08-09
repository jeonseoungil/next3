import styles from './project.module.css'
export const Project = () => {
    return (
        <seciton id="projects" className={`con ${styles.project}`} >
            <div className="inner">
                <h2>Projects</h2>
                <div>
                    <article>
                        <div className={styles.view} >
                            <div>
                            <video
  src="/projects/project1.mp4"
  controls
  preload="auto"
  poster="/projects/project1_1.png"
  autoPlay
  loop
  muted
  className="custom-video"
>
</video>
                            </div>
                            <ul>
                                <li> <img src="/projects/project1_1.png" alt="" /></li>
                                <li> <img src="/projects/project1_2.png" alt="" /></li>
                                <li> <img src="/projects/project1_3.png" alt="" /></li>
                                <li> <img src="/projects/project1_4.png" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3> REACT와 Redux toolkit </h3>
                            <h4> (팀프로젝트) 음악 페이지 만들기 </h4>
                            <p>
                                <span>다양한 외부 api를 이용하여 음악 차트 사이트를 만들고, 로컬스토리지를 통해 로그인/회원가입 기능 및 playlist 등에 기능 개별적 구현  </span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <ul>
                                <li><b>주요기능</b>  <strong> api 제작 및 오픈 api, 토큰 구조의 api 데이터 출력하기, 로컬스토리지를 이용한 데이터 저장 및 데이터 추가 삭제, 게시판,상세페이지  </strong></li>
                                <li><b>기획서</b>  <strong> <a href="/REACT를 이용한 음악 페이지 제작.pdf" target="_blank">바로보기</a> </strong></li>
                                <li><b>미리보기</b>  <strong> <a href="https://jeonseoungil.github.io/project8" target="_blank">바로가기</a> </strong></li>
                                <li><b>gitHub</b>  <strong> <a href="https://github.com/jeonseoungil/project8" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b>  <strong> Redux toolkit,styled-component,react,swiper,ajax </strong></li>
                                <li><b>backend</b>  <strong> Node.js </strong></li>
                                <li><b>database</b>  <strong> MySQL </strong></li>
                                <li><b>deployment</b>  <strong> AWS클라우드 </strong></li>
                            </ul>
                        </div>
                    </article>
                    {/*  */}
                    <article>
                        <div className={styles.view} >
                            <div>
                            <video
  src="/projects/project2.mp4"
  controls
  preload="auto"
  poster="/projects/project2_1.png"
  autoPlay
  loop
  muted
  className="custom-video"
>
</video>                            </div>
                            <ul>
                            <li> <img src="/projects/project2_1.png" alt="" /></li>
                                <li> <img src="/projects/project2_2.png" alt="" /></li>
                                <li> <img src="/projects/project2_3.png" alt="" /></li>
                                <li> <img src="/projects/project2_4.png" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3> 자바스크립트를 이용한 페이지</h3>
                            <h4>(프로젝트) 병원 사이트 만들기 </h4>
                            <p>
                                <span>병원 사이트를 java script를 이용하여 페이지로 구현</span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <ul>
                                <li><b>주요기능</b>  <strong> 정규표현식를 이용한 로그인, 페이징 기능 및 배열을 이용한 검색 기능, 게시판 및 조회 기능</strong></li>
                                <li><b>기획서</b>  <strong> <a href="/세브란스병원 웹사이트 제작.pdf" target="_blank">바로가기</a> </strong></li>
                                <li><b>미리보기</b>  <strong> <a href="https://jeonseoungil.github.io/project6/1.%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/index.html" target="_blank">바로가기</a> </strong></li>
                                <li><b>gitHub</b>  <strong> <a href="https://github.com/jeonseoungil/project6" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b>  <strong> html,css,java script </strong></li>
                                <li><b>반응형</b>  <strong> CSS media queries, vw </strong></li>

                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </seciton>
    );
};