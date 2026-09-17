'use client'

import Image from "next/image";
import css from "./page.module.scss";
import { useEffect, useState } from "react";


 
  const imageMap = {
    1: {
      coinSide: "/heads.svg",
      coinAlt: 'heads',
      resultText: 'Heads',
    },
    2:  {
      coinSide: "/tails.svg",
      coinAlt: 'tails',
      resultText: 'Tail',
    },
  } as const

  type ImageKey = keyof typeof imageMap

export default function Home() {
  const [activeKey, setActiveKey] = useState<ImageKey>(1)

  const randomiseSide = () => {
    const randomNum = (Math.floor(Math.random() * 2) + 1) as ImageKey
    setActiveKey(randomNum)
  }

  useEffect(() => {
    randomiseSide()
  }, [])

  if (activeKey === null) return null
  
  const imageCurrent = imageMap[activeKey]


  return (
    <>
      
      <div className={css.centered}>

        <h1 className={css.header}>
            Flip the coin
        </h1>
        <p className={css.text}>
          Press the coin or button to flip
        </p>
        <button
          className={css.coinBtn}
          onClick={randomiseSide} >
        <Image
          src={imageCurrent.coinSide}
          alt={imageCurrent.coinAlt}
          width={200}
          height={200}
          priority
        />
        </button>
        <Image
          src="/shadow.svg"
          alt="shadow"
          width={150}
          height={100}
          priority
        />

        <h3
          className={css.result}>
          {imageCurrent.resultText}
        </h3>
        <button
          className={css.btn}
          onClick={randomiseSide}>
          RANDOM
        </button>
        
    </div>

    </>
  );
}
