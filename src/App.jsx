import Home from './pages/Home'
import { Route, Switch } from 'wouter'
import Meaning from './pages/Meaning'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { useThemeStore } from './store/ThemeStore'

function App() {
  const { mode, font } = useThemeStore()
  console.log(mode)
  console.log(font)
  return (
    <div className={`${mode === 'dark' ? 'dark' : ''} `}>
      <div
        className={
          'App max-w-4xl m-auto w-full dark:bg-black dark:text-[#f5f5f5]'
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
