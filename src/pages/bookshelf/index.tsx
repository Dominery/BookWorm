import React, { useState } from 'react'
import {
  BoxHeader,
  Layout,
  TabBar,
  verticalBooks,
  LinkedSearchBox,
  ToggleIcon,
  BookInfo,
  booksWithoutDesc,
} from 'components/index'

import './index.scss'
import { Navigation, ICONS } from 'utils/data'
import { getBookShelf } from 'utils/storage'
import BookLayoutChange from './bookLayoutChange/index'

const CHOICES = [
  {
    id: 'vertical',
    title: '书籍简图',
    render: (books: BookInfo[]) => verticalBooks(books, 'bookshelf__book bookshelf__line-book width--25'),
  },
  {
    id: 'list',
    title: '列表视图',
    render: (books: BookInfo[]) => booksWithoutDesc(books, 'bookshelf__book bookshelf__list-book'),
  },
]

function BookShelfPage({ match }) {
  const [toggle, setToggle] = useState(false)
  const books = getBookShelf()
  const [choice, setChoice] = useState(CHOICES[0].id)
  return (
    <Layout
      footer={<TabBar active={Navigation.BookShelf} />}
      header={
        <BoxHeader
          left={
            <i
              onClick={() => setToggle(!toggle)}
              className="iconfont bookshelf__button"
              dangerouslySetInnerHTML={{ __html: ICONS.TOGGLE }}
            />
          }
        >
          <LinkedSearchBox to={Navigation.Search} />
        </BoxHeader>
      }
    >
      <>
        <BookLayoutChange
          choices={CHOICES}
          choice={choice}
          setChoice={(choice) => setChoice(choice)}
          className={`bookshelf__layout ${toggle ? 'bookshelf__layout--active' : ''}`}
          onClick={(e) => {
            setToggle(false)
          }}
        />
        {CHOICES.find((info) => info.id === choice)?.render(books)}
      </>
    </Layout>
  )
}

export default BookShelfPage
