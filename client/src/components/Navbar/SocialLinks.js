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
        <i class="fab fa-vk"></i>
      </li>
      <li>
        <i class="fab fa-github-square"></i>
      </li>
    </ul>
  );
};

export default SocialLinks;
