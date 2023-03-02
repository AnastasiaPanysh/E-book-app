import style from './Features.module.css'

function TextContentItem({ title, text, imgClass }) {
    return (
        <>
            <div className={style['content']}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={style[imgClass]}></div>
        </>
    )
}

export default TextContentItem
