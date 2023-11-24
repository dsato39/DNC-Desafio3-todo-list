import './style.scss'

const Edit_task = ({data}) => {
  return (
    <div className='edit_task'>
        <div className='editing_task'>
          <p>Deseja editar esse item?</p>
        </div>
        <div className='editing_task_description'>
          <p>{data.description}</p>
        </div>
        <div className='confirm_buttons'>
          <button className='negative_button'>Não</button>
          <button className='afirmative_button'>Sim</button>
        </div>
    </div>
  )
}

export default Edit_task