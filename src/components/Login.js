import styles from "../styles/login.module.scss";
import ctaLogoOneImage from "../assets/images/cta-logo-one.svg";
import ctaLogoTwoImage from "../assets/images/cta-logo-two.png";
const Login = (props) => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img
            src={ctaLogoOneImage}
            alt="Disney+ Logo"
            className={styles.ctaLogoOne}
          />
          <button className={styles.getAllThereButton}>GET ALL THERE</button>
          <p className={styles.discription}>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and the Disney Bundle will increase by $1.
          </p>
          <img
            src={ctaLogoTwoImage}
            alt="CTA Logo Two"
            className={styles.ctaLogoTwo}
          />
        </div>
        <div className={styles.bgImage}></div>
      </div>
    </section>
  );
};
export default Login;
