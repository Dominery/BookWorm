import React, { useContext, useEffect, useRef, useState } from 'react'
import { BackIcon, BookCatalogue, BookFlip, TitleHeader, ToastContext } from 'components/index'
import BottomMenu from './bottomMenu/index'

import './index.scss'
import getChapters from 'service/chapter'
import { fromBottom, fromTop, useTouch } from 'utils/touch'
import FontMenuItem from './bottomMenu/fontMenuItem/index'
import ColorMenuItem from './bottomMenu/colorMenuItem/index'
import { CHAPTER_COLORS, ICONS } from 'utils/data'
import { useOnRequest } from 'utils/request'

const colors = CHAPTER_COLORS.map((item) => item.background)

function Chapter({ match, location }) {
  const { chapterIdList, v, id } = location.state
  const bookId = match.params.id
  const [touch, setTouch] = useState(false)
  const [finished, setFinished] = useState(false)
  const [currentChapterId, setCurrentChapterId] = useState(id)
  const [chapterData, setChapterData] = useState([])
  const contentRef = useRef()
  const setToast = useContext(ToastContext)
  const [onRequest, request] = useOnRequest(() => requestChapter(id, (chapters) => setChapterData(chapters)))
  const [touchStart, touchEnd] = useTouch({
    up: () => {
      if (fromBottom(contentRef) > 300) {
        return
      }
      requestChapter(currentChapterId, (chapters) => setChapterData([...chapterData, ...chapters]))
    },
    bottom: () => {
      console.log('pull-down')
      if (fromTop(contentRef) > 10) return
      request().catch(() => {
        setToast('重新加载失败,您可以再次尝试或重新进入', 2000)
      })
    },
  })

  const [backgroundColor, setBackgroundColor] = useState(colors[0])
  const [fontSize, setFontSize] = useState(16)
  useEffect(() => {
    request().catch(() => {
      setToast('加载失败，请下拉重试', 2000)
    })
  }, [location])
  return (
    <div className={`chapter ${touch ? 'chapter--active' : ''}`}>
      <TitleHeader left={<BackIcon className="chapter__back-icon" />} className="chapter__header" />
      {onRequest ? (
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
    return getChapters(bookId, chapterIds, v).then((data) => {
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
        .replace(/[^\S\n]/g, '')
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
