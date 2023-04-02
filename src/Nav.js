import React from "react";
import { Link } from 'react-router-dom';
import { Menu } from "antd";
import { 
    HomeOutlined, 
    ProfileOutlined, 
    FileProtectOutlined 
} from '@ant-design/icons';

const Nave = (props) => {
    const { current } = propsreturn (
        <div>
            <Menu 
                selectedKeys={[current]} 
                mode="horizontal"
            >
                <MenuItem.Item key='home'>
                    <Link to={`/`}>
                        <HomeOutlined />Home
                    </Link>
                </MenuItem.Item>
                <MenuItem.Item key='profile'>
                    <Link to={`profile`}>
                        <ProfileOutlined />Profile
                    </Link>
                </MenuItem.Item>
                <MenuItem.Item key='protected'>
                    <Link to={`/protected`}>
                        <FileProtectOutlined />Protected
                    </Link>
                </MenuItem.Item>
            </Menu>
        </div>
    )
};

export default Nav