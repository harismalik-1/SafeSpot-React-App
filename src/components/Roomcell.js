import './Roomcell.css';

export default function Roomcell(props) {
  return (
    <div className="roomcell" onClick>
        <div className='id inline'>id{props.id}</div>
        <div className='name inline'>{props.name}</div>
    </div>
  );
}

