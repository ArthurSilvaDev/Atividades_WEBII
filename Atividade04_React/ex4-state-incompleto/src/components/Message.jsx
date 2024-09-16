/* eslint-disable react/prop-types */
import './Message.css'

const Message = ({children, ...props}) => 
    <h5 {...props}>{children}</h5>

export default Message