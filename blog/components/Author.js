import { Avatar, Divider } from 'antd'
import '../styles/components/Author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <Avatar size={100} src="https://upload.jianshu.io/users/upload_avatars/540754/37de4713f399.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"></Avatar>
            <div className="author-name">TimberTang</div>
            <div className="author-introduction">
                从iOS转大前端 , 争取进入大厂.
                <Divider>TimberTang</Divider>
                <Avatar size={28} icon="github" className="account"></Avatar>
                <Avatar size={28} icon="qq" className="account"></Avatar>
                <Avatar size={28} icon="wechat" className="account"></Avatar>
            </div>
            
        </div>
    )
}

export default Author