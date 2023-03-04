import Home from './pages/Home'
import { Route, Switch } from 'wouter'
import Meaning from './pages/Meaning'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { useThemeStore } from './store/ThemeStore'

function App() {
  const { dark, font } = useThemeStore()
  console.log(dark)

  return (
    <div className={`${dark && 'dark bg-black'} font-${font}`}>
      <div
        className={
          'App max-w-3xl m-auto w-full dark:bg-black dark:text-[#f5f5f5]'
        }
      >
        <Navbar />
        <Search />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/meaning/:word" component={Meaning} />
        </Switch>
      </div>
    </div>
  )
}

export default App
