import style from './Preview.module.css'

function Preview() {
    return (
        <div className={style['wrapper']}>
            <div className={style['image']}></div>
            <div className={style['preview-information']}>
                <div>
                    <div className={style['logo']}></div>
                    <h1>E-book app</h1>
                    <p>Mobile app for reading and listening to books on the go, anywhere in the world.</p>
                    <div className={style['wrapper-btn']}>
                        <div className={style['google-play']}></div>
                        <div className={style['app-store']}></div>
                    </div>
                </div>
                <div className={style['explore']}>
                    <p>Explore more</p>
                    <div className={style['arrow']}></div>
                </div>
            </div>
        </div>
    )
}

export default Preview