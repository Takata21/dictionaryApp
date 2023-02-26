import Select from "./Select"
import Switch from "./Switch"

function Navbar() {
  return (
    <header className="flex items-center justify-between p-5 mt-12">
      <a href="/" className="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#838383"
          width="34px"
          height="40px"
          stroke="#838383"
          strokeWidth="10"
          viewBox="0 0 24 24"
        >
          <g stroke="none">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05zM16 9H8V7h8v2z" />
          </g>
        </svg>
      </a>
      <div className="flex items-center flex-1">
        <Select />
        <Switch />
      </div>
    </header>
  )
}

export default Navbar
