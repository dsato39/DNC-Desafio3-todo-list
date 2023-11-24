import './style.scss'
import plus from '../../images/plus.svg'

const Add_task = () => {
  return (
    <div className='add_task'>
        <table>
            <tbody>
                <tr>
                    <td colSpan="2">Nova tarefa...</td>
                    <td></td>
                    <td><img src={plus} alt="add_task" /></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Add_task