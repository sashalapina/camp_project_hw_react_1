import './App.css'
import './Button/Button.css'
import './UserCard/UserCard.css'
import './Articles/Articles.css'
import './Product/Product.css'

import { useState } from 'react';
import { UserCard } from './UserCard/userCard';
import { ProductCard } from './Product/product';
import { Article } from './Articles/Article';
import { Button } from './Button/Button';
import articlesData from './Articles/articles.json';

function App() {
  const [productObject] =  useState({
    "id": "GGOEGFKA086699",
    "name": "Google Emoji Sticker Pack",
    "description": "Who doesn't use emojis? Decorate your space with your current mood!",
    "features": "<p>Pack contains two sticker sheets</p>\n<p>Each Sheet has different emojis</p>\n<p><span>Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.</span></p>",
    "price": "4.99",
    "keywords": "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
    "url": "Google+Emoji+Sticker+Pack+2+sheet",
    "category": "accessories",
    "subcategory": "accessories"
  });

  const onClick= () => {
    console.log('Я не смогла сделать адаптив')
    console.log('И несколько статей мне некуда вставить')

  }

  const article1 = articlesData.articles.find(article => article.id === 1)
  const articleTitle1 = article1.title
  const articleText1 = article1.text

  const article2 = articlesData.articles.find(article => article.id === 2)
  const articleTitle2 = article2.title
  const articleText2 = article2.text

  const article3 = articlesData.articles.find(article => article.id === 3)
  const articleTitle3 = article3.title
  const articleText3 = article3.text



  return (
    <div>
      <div className='user-product-container'>
        <UserCard name={'Aleksandra'} age={31} />
        <ProductCard product={productObject} />
      </div>
      <div className='article-list-container'>
        <Article title={articleTitle1} text={articleText1} />
        <Article title={articleTitle2} text={articleText2} />
        <Article title={articleTitle3} text={articleText3} />
      </div>
      <div className='button-container'>
        <Button onClick={onClick} />
      </div>
    </div>
  )
}

export default App
