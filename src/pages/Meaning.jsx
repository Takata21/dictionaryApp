import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'wouter'
import generateId from '../libs/generateId'
import { useWordStore } from '../store/WordStore'
import Loader from '../components/Loader'
import ErrorComponent from '../components/Error'

function Meaning({ params }) {
  const [word, setWord] = useState(params.word)
  const { meaning, getMeaning, loading, error } = useWordStore()

  useEffect(() => {
    const getData = async () => {
      setWord(params.word)
      await getMeaning(params.word)
    }

    getData()
  }, [word])

  const data = meaning[0]
  console.log(meaning)
  const audioRef = useRef()
  const handlePlay = () => {
    audioRef.current.play()
  }
  return loading ? (
    <main className="w-full min-h-screen">
      <Loader size={'l'} />
    </main>
  ) : (
    <main>
      {error ? (
        <section className="px-6 mt-8  w-full text-base md:text-xl min-h-full flex items-center justify-center">
          <div className="flex items-center justify-center min-h-[calc(100vh_-_191px)]">
            <ErrorComponent message={meaning} />
          </div>
        </section>
      ) : (
        <section className="px-6 mt-8  w-full text-base md:text-xl min-h-screen">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-medium md:text-5xl md:font-semibold">
                {data?.word}
              </h1>
              <div className="flex flex-col">
                <span className="text-[#a445ed]">
                  {data?.phonetics[1]?.text}
                </span>
                <span className="text-[#a445ed]">
                  {data?.phonetics[2]?.text}
                </span>
              </div>
            </div>

            {data?.phonetics?.length > 0 && (
              <>
                <button
                  className="bg-[#e8d0fa] w-16 h-16 flex items-center justify-center rounded-full hover:bg-[#a445ed] group transition-colors"
                  onClick={handlePlay}
                >
                  <svg
                    className="group-hover:fill-[#fff]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50%"
                    height="50%"
                    fill="#a445ed"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="none"
                      d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    />
                  </svg>
                </button>
                {data?.phonetics?.map((item) => {
                  return (
                    item.audio !== '' && (
                      <audio src={item.audio} ref={audioRef}></audio>
                    )
                  )
                })}
              </>
            )}
          </div>
          <div className="">
            {data?.meanings?.map((item) => (
              <div key={generateId()}>
                <h4 className="font-bold my-5 capitalize md:text-2xl">
                  {item?.partOfSpeech}
                </h4>
                <p className="font-medium my-4 capitalize">meaning</p>
                <ul className="list-disc">
                  {item?.definitions.map((definition) => (
                    <li className="marker:text-[#a445ed]" key={generateId()}>
                      <span>{definition?.definition}</span>{' '}
                      <p className="text-gray-500 my-3">
                        {definition?.example}
                      </p>
                    </li>
                  ))}
                </ul>
                {item?.synonyms.length > 0 && (
                  <>
                    <h4 className="font-light my-3 capitalize text-[#a445ed] italic md:text-2xl">
                      Synonyms
                    </h4>
                    <ul className="list-disc">
                      {item?.synonyms.map((synonym) => {
                        return synonym.match(' ') ? (
                          <li
                            className="marker:text-[#a445ed] capitalize text-gray-600 font-medium"
                            key={generateId()}
                          >
                            {synonym}
                          </li>
                        ) : (
                          <li
                            className="marker:text-[#a445ed] capitalize text-gray-600 font-medium"
                            key={generateId()}
                          >
                            <Link to={`/meaning/${synonym}`}>
                              <a className="text-[#a445ed]">{synonym}</a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )}
                {item?.antonyms.length > 0 && (
                  <>
                    <h4 className="font-light my-3 capitalize text-[#a445ed] italic md:text-2xl">
                      Antonyms
                    </h4>
                    <ul className="list-disc">
                      {item?.antonyms.map((antonym) => {
                        return antonym.match(' ') ? (
                          <li
                            className="marker:text-[#a445ed] capitalize text-gray-600 font-medium"
                            key={generateId()}
                          >
                            {antonym}
                          </li>
                        ) : (
                          <li
                            key={generateId()}
                            className="marker:text-[#a445ed] capitalize text-gray-600 font-medium"
                          >
                            <Link to={`/meaning/${antonym}`}>
                              <a className="text-[#a445ed]">{antonym}</a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="">
            <h4 className="font-bold my-3 capitalize md:text-2xl">license</h4>
            <p>{data?.license?.name}</p>
            <a href={data?.license?.url} className="text-[#a445ed] break-words">
              {data?.license?.url}
            </a>
          </div>
          <div className="">
            <h4 className="font-bold my-3 capitalize md:text-2xl">Source</h4>
            <a href={data?.sourceUrls} className="text-[#a445ed] break-words">
              {data?.sourceUrls}
            </a>
          </div>
        </section>
      )}
    </main>
  )
}

export default Meaning
