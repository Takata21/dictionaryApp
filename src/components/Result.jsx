import generateId from '../libs/generateId'
import result from '../Mocks/Word.json'
// import getWordMeaning from '../services/Words'
function Result() {
  const data = result[0]
  return (
    <section className="px-6 mt-6  w-full text-base md:text-xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium md:text-5xl md:font-semibold">
            {data?.word}
          </h1>
          <div className="flex flex-col">
            <span className="text-[#a445ed]">{data?.phonetics[1]?.text}</span>
            <span className="text-[#a445ed]">{data?.phonetics[2]?.text}</span>
          </div>
        </div>

        {data.phonetics.length > 0 && (
          <>
            <button className="bg-[#e8d0fa] w-16 h-16 flex items-center justify-center rounded-full hover:bg-[#a445ed] group transition-colors">
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
            <audio src={data?.phonetics[0]?.audio}></audio>
          </>
        )}
      </div>
      <div className="">
        {data.meanings?.map((item) => (
          <div key={generateId()}>
            <h4 className="font-bold my-5 capitalize md:text-2xl">
              {item?.partOfSpeech}
            </h4>
            <p className="font-medium my-4 capitalize">meaning</p>
            <ul className="list-disc">
              {item?.definitions.map((definition) => (
                <li className="marker:text-[#a445ed]" key={generateId()}>
                  <span>{definition?.definition}</span>{' '}
                  <p className="text-gray-500 my-3">{definition?.example}</p>
                </li>
              ))}
            </ul>
            {item?.synonyms.length > 0 && (
              <>
                <h4 className="font-light my-3 capitalize text-gray-500 md:text-2xl">
                  Synonyms
                </h4>
                <ul className="list-disc">
                  {item?.synonyms.map((synonym) => (
                    <li
                      className="marker:text-[#a445ed] capitalize text-gray-600 font-medium"
                      key={generateId()}
                    >
                      {synonym}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {item?.antonyms.length > 0 && (
              <>
                <h4 className="font-light my-3 capitalize text-gray-500 md:text-2xl">
                  Antonyms
                </h4>
                <ul className="list-disc">
                  {item?.antonyms.map((antonym) => (
                    <li
                      className="marker:text-[#a445ed] capitalize text-gray-600 font-medium"
                      key={generateId()}
                    >
                      {antonym}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="">
        <h4 className="font-bold my-3 capitalize md:text-2xl">license</h4>
        <p>{data.license.name}</p>
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
  )
}

export default Result
