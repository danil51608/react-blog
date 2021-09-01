import { Paper, makeStyles } from "@material-ui/core";
import classes from "./AboutPage.module.css";
import myImage from "../../assets/imgs/bitard.jpg";

const useStyles = makeStyles({
  root: {
    width: "90%",
    padding: "20px",
    textAlign: "left",
  },
});

const AboutPage = () => {
  const styles = useStyles();
  return (
    <div className={classes.container}>
      <Paper elevation={3} className={styles.root}>
        <h1>About me</h1>
        <div className={classes.content}>
          <div className={classes.imgContainer}>
            <img src={myImage} alt="me" />
          </div>
          <div className={classes.text}>
            <p>
              Привет и добро пожаловать в мой блог! Меня зовут Данил. Я Junior
              Fullstack Developer. Мне нравится делать сайты и приложения. С
              некоторыми из моих приложений вы можете ознакомиться на моем
              GitHub.
              <br />
              Кстати, этот тот блок был написан полностью мной от А до Я {":)"}.
              <br />
              При его создании я использовал:
              <br />
              <ul className={classes.list}>
                <li>Node.Js</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>MaterialUI</li>
                <li>AWS S3</li>
              </ul>
              <br />
              Кроме вышеперечисленного, данный сайт является адаптивным. Можете
              опробовать весь функционал этого блога зарегистрировавшись и
              написав пару постов. Пароли хранятся в захэшированном виде.
            </p>
            <div className={classes.contacts}>
              <i class="far fa-envelope"> </i>
              <span>danil51608@gmail.com</span>
              <br />
              <i class="fas fa-mobile"></i>
              <span>+7 (917)-364-69-09</span>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AboutPage;
