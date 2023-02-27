import style from './Advantages.module.css';

function AdvantageItem({ id, header, text, imageClass }) {
    return (
        <div className={style['item']}>
            <div className={style[imageClass]}></div>
            <div className={style['item-logo']}>
                <h3>{header}</h3>
                {id == 3 ? <div className={style['btn']} >Coming soon</div> : null}
            </div>
            <p>{text}</p>
        </div >

    )
}

export default AdvantageItem