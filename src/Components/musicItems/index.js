import './index.css'

const musicItems = props => {
  const {musicDetails,DeleteList}
  const {imageUrl, name, genre, duration} = musicDetails

  const ondelete () =>{
      DeleteList(id)

  }
  return (
    <li className="list-container">
      <img src={imageUrl} className="image" alt={name} />
      <div className="name-gen-container">
        <p className="name">{name}</p>
        <p className="gener">{genre}</p>
      </div>
      <div className="duration-del-container">
        <p className="time">{duration}</p>
        <button 
        type="button" 
        className="button"
        onClick={ondelete}
        >
          delete
        </button>
      </div>
    </li>
  )
}
