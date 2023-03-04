import style from './Features.module.css'

function TextContentItem({ title, text, imgClass }) {
    return (
        <>
            <div className={style['content']}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={style[imgClass]}></div>
        </>
    )
}

export default TextContentItem
