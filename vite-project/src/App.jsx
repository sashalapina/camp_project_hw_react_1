import './App.css'
import { useState } from 'react';
import { UserCard } from './userCard';
import { ProductCard } from './product';
import { Article } from './Article';
import { Button } from './Button';

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

  const articleTitle = 'Sedentary Lifestyle Puts Office Workers at Risk';
  const articleText = 'The last time the majority of the American population worked hard in terms of solid physical exercise was in the 19th century or so, when they still needed to work on farms to grow food for themselves. Public transportation was not as developed as today, and many townsmen had to walk around by feet. There were no electrical appliances that could make all household chores easier, so men and women had to do their best to maintain order at home. Some people might say those were dark and uncivilized times, when people used to die from exhaustion; but no one can accuse our forefathers of leading a sedentary way of life. ';

  return (
    <div>
      <UserCard name={'Aleksandra'} age={31} />
      <ProductCard product={productObject} />
      <Article title={articleTitle} text={articleText} />
      <Button onClick={onClick}/>
    </div>
  )
}

export default App
