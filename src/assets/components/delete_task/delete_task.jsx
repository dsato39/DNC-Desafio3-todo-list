import './style.scss'

const Delete_task = ({data}) => {
  return (
    <div className='delete_task'>
    <div className='deleting_task'>
      <p>Deseja excluir esse item?</p>
    </div>
    <div className='deleting_task_description'>
      <p>{data.description}</p>
    </div>
    <div className='confirm_buttons'>
      <button className='negative_button'>Não</button>
      <button className='afirmative_button'>Sim</button>
    </div>
</div>
  )
}

export default Delete_task