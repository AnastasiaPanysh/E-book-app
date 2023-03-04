import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["logo"]}></div>
            <nav>
                <p>Privacy Policy</p>
                <p>Security</p>
                <p>Terms of Services</p>
                <p>Contact Us</p>
            </nav>
            <div className={style["icons"]}></div>
        </div>
    )
}

export default Footer