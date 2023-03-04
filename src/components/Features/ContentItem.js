import TextContentItem from './TextContentItem'
function ContentItem({ label }) {

    const content = [
        {
            id: 1,
            title: 'Internal editor',
            text: `While reading, you can easily change the color, font, text size, line spacing, and other attributes.

            
            Mark up and annotate text passages, bookmark your current page, translate selected parts of the text or copy it.`,
            img: 'imgClass1'
        }
        ,
        {
            id: 2,
            title: 'Compact preview',
            text: `Each book has a compact menu with everything you need - starting from the rating, the number of pages, language and a brief introduction of the book, and ending with the choice of book format - read view and audio.`,
            img: 'imgClass2'
        },
        {
            id: 3,
            title: 'Convenient search',
            text: `The app has a separate tab on the main panel with several types of search and selection of books.

            You can search by the title of a book, it’s author, or a particular topic. Also, for those who don’t have a specific request, you can find a book in top categories or by top book authors.`,
            img: 'imgClass3'
        },
        {
            id: 4,
            title: 'Audio version',
            text: `The Pocket Book app delivers a high-quality ebook-reading and audiobook-listening experience. 

            Parallel to the audio track, the text of the book is broadcast. You can pause the audio at any time and switch to independent reading of the book. At the same time, your book progress will be automatically saved.`,
            img: 'imgClass4'
        }
    ]

    function showContent() {

        if (label === 'Internal editor') {
            return <TextContentItem key={content[0].id} imgClass={content[0].img} title={content[0].title} text={content[0].text} />
        } else if (label === 'Compact preview') {
            return <TextContentItem key={content[1].id} imgClass={content[1].img} title={content[1].title} text={content[1].text} />
        } else if (label === 'Convenient search') {
            return <TextContentItem key={content[2].id} imgClass={content[2].img} title={content[2].title} text={content[2].text} />
        } else {
            return <TextContentItem key={content[3].id} imgClass={content[3].img} title={content[3].title} text={content[3].text} />
        }
    }
    return showContent()


}
export default ContentItem