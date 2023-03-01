import Navbar from '../../components/Navbar'
import Result from '../../components/Result'
import Search from '../../components/Search'

function Home() {
  return (
    <>
      <Navbar />
      <main className="font-sans w-full m-auto p-5 overflow-hidden">
        <Search />
        <Result />
      </main>
    </>
  )
}

export default Home
