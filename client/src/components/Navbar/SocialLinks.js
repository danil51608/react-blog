import classes from "./SocialLinks.module.css";

const SocialLinks = (props) => {
  return (
    <ul className={classes["links-container"]}>
      {/* <li>
        <i class="fab fa-facebook-square"></i>
      </li>
      <li>
        <i class="fab fa-instagram-square"></i>
      </li> */}
      <li>
        <a href="https://vk.com/keepcalmnigga" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-vk"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/danil51608/react-blog" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github-square"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
