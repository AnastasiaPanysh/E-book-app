import style from './Features.module.css'
import { useState } from 'react'
import ContentItem from './ContentItem';

function Features() {
    const [content, setContent] = useState(<ContentItem label={'Internal editor'} />);

    function getContent(event) {
        setContent(<ContentItem label={event.target.textContent} />)
        console.log(event.target.textContent);
    }

    return (
        <div className={style['wrapper']}>
            <h2>Explore more features</h2>
            <div onClick={getContent} className={style['container']}>
                <p>Internal editor</p>
                <p>Compact preview</p>
                <p>Convenient search</p>
                <p>Audio version</p>
            </div>
            <div className={style['block-feature']}> {content} </div>
        </div>
    )
}

export default Features