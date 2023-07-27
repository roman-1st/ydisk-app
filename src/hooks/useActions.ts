import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsCreator from '../redux/actions/action-creator'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreator, dispatch)
}