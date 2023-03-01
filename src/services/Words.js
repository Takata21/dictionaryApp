async function getWordMeaning(word) {
  const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'
  try {
    const response = await fetch(`${API_URL}/${word}`)
    const data = await response.json()
    const meaning = data
    return meaning
  } catch (err) {
    throw new Error('Error searching word')
  }
}

export default getWordMeaning
