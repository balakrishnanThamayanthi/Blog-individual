import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTittleSm">React & Note</span>
        <span className="headerTittleSm">Blog</span>
      </div>
      <img className="headerImg"
        src="https://cdn.pixabay.com/photo/2018/01/19/08/59/nature-3091991_960_720.jpg"
        alt=""
      />
    </div>
  )
}
