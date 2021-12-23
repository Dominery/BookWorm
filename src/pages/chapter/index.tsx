import React, { useEffect, useRef, useState } from 'react'
import { BackIcon, BookCatalogue, BookFlip, Header } from 'components/index'
import BottomMenu from './bottomMenu/index'

import './index.scss'
import getChapters from 'service/chapter'
import { fromBottom, useTouch } from 'utils/touch'
import FontMenuItem from './bottomMenu/fontMenuItem/index'
import ColorMenuItem from './bottomMenu/colorMenuItem/index'
import { CHAPTER_COLORS, ICONS } from 'utils/data'

const colors = CHAPTER_COLORS.map((item) => item.background)

function Chapter({ match, location }) {
  const { chapterIdList, v, id } = location.state
  const bookId = match.params.id
  const [touch, setTouch] = useState(false)
  const [finished, setFinished] = useState(false)
  const [currentChapterId, setCurrentChapterId] = useState(id)
  const [chapterData, setChapterData] = useState([])
  const contentRef = useRef()
  const [touchStart, touchEnd] = useTouch({
    up: () => {
      if (!fromBottom(100, contentRef)) {
        return
      }
      requestChapter(currentChapterId, (chapters) => setChapterData([...chapterData, ...chapters]))
    },
  })

  const [backgroundColor, setBackgroundColor] = useState(colors[0])
  const [fontSize, setFontSize] = useState(16)
  useEffect(() => {
    console.log(location)
    requestChapter(id, (chapters) => setChapterData(chapters))
  }, [location])
  return (
    <div className={`chapter ${touch ? 'chapter--active' : ''}`}>
      <Header left={<BackIcon className="chapter__back-icon" />} className="chapter__header" />
      {chapterData.length === 0 ? (
        <BookFlip />
      ) : (
        <div
          className="chapter__content"
          style={{ backgroundColor, fontSize: `${fontSize / 16}rem`, color: getFontColor(backgroundColor) }}
          onClick={() => setTouch(!touch)}
          ref={contentRef}
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
        >
          {createChapter(chapterData)}
          {finished && <p className="chapter__paragraph">已经是最新章节</p>}
        </div>
      )}
      <BottomMenu className="chapter__bottom" menuItems={createMenuItems(bookId, chapterIdList)} />
    </div>
  )

  function requestChapter(currentId: string, process: (newChapter: any[]) => void) {
    const chapterIds = getRequestChapterIdList(currentId, chapterIdList)
    if (finished || chapterIds.length === 0) {
      return
    }
    console.log(chapterIds)
    getChapters(bookId, chapterIds, v).then((data) => {
      process(data)
      const length = data.length
      let nextId = length === 0 ? null : getNextChapterId(currentId, chapterIdList, length)
      if (nextId) {
        setCurrentChapterId(nextId)
      } else {
        setFinished(true)
      }
    })
  }

  function createMenuItems(bookId: number, chapterIdList: any[]) {
    return [
      {
        element: <BookCatalogue catalogue={chapterIdList} className="catalogue-menuItem" bookId={bookId} />,
        buttonId: 'catalogue',
        icon: ICONS.TOGGLE,
      },
      {
        element: (
          <ColorMenuItem
            colors={colors}
            currentColor={backgroundColor}
            setColor={(color) => {
              if (colors.includes(color)) {
                setBackgroundColor(color)
              }
            }}
          />
        ),
        buttonId: 'background',
        icon: ICONS.COLOR,
      },
      {
        element: (
          <FontMenuItem
            fontSize={fontSize}
            setFontSize={(size) => {
              if (size < 14 || size > 28) {
                return
              }
              setFontSize(size)
            }}
          />
        ),
        buttonId: 'font',
        icon: ICONS.FONT_SIZE,
      },
    ]
  }
}

function createChapter(data: any[]) {
  return data.map((item) => <section key={item.id}>{generateParagraph(item.content, item.name)}</section>)
}

function getNextChapterId(currentId: string, chapterIdList: any[], dataLength: number): null | string {
  const index = chapterIdList.findIndex((item) => item.id === currentId)
  if (index === -1 || index + dataLength > chapterIdList.length - 1) {
    return null
  }
  return chapterIdList[index + dataLength].id
}

function getRequestChapterIdList(currentId: string, chapterIdList: any[]) {
  const index = chapterIdList.findIndex((item) => item.id === currentId)
  if (index === -1) return []
  return chapterIdList.slice(index, index + 1).map((item) => item.id)
}

function generateParagraph(content: string, name: string) {
  return (
    <>
      <h2 className="chapter__name">{name}</h2>
      {content
        .replace(' ', '')
        .replace('\n\n', '\n')
        .split('\n')
        .map((text, index) => (
          <p className="chapter__paragraph" key={index}>
            {text}
          </p>
        ))}
    </>
  )
}

function getFontColor(backgroundColor) {
  return CHAPTER_COLORS.find((item) => item.background === backgroundColor).color
}

export default Chapter
