function generateId() {
  const id = crypto.randomUUID()
  console.log(id)
  return id
}

export default generateId
