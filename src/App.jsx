import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import Canvas from './Canvas';
import CComponent from './CComponent';
import {v4 as uuidv4} from 'uuid';

const {Header, Content, Footer} = Layout;

const App = () => {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        fetch('https://dimag-back.vercel.app/ccomponents')
            .then(response => response.json())
            .then(data => setComponents(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const deleteComponent = (id) => {
        // First, update the local state to immediately reflect the change in the UI
        setComponents(components.filter(component => component.id !== id));

        // Then, make an API call to delete the component from the backend
        fetch(`https://dimag-back.vercel.app/ccomponents/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete the component from the backend');
                }
                console.log('Component deleted successfully from the backend');
            })
            .catch(error => {
                console.error('Error:', error);
                // You might want to handle this error more gracefully,
                // possibly by informing the user or by rolling back the deletion in the UI
            });
    };

    const addComponent = () => {

        const newComponent = {
            id: uuidv4(),
            x: 100 * components.length,
            y: 100 * components.length,
            content: `Component ${components.length}`
        };

        fetch('https://dimag-back.vercel.app/ccomponents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComponent)
        })
            .then(response => response.json())
            .then(savedComponent => {
                setComponents([...components, savedComponent]);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <Layout className='layout'>
            <Header>
                <div className='logo'/>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>Home</Menu.Item>
                    <Menu.Item key='2'>About</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-content'>
                    <div>
                        <button onClick={addComponent}>Add Component</button>
                        <Canvas>
                            {
                                components.length > 0 ? (
                                    components.map(
                                        comp => (
                                            <CComponent onDelete={deleteComponent}
                                                        key={comp.id}
                                                        id={comp.id}
                                                        x={comp.x}
                                                        y={comp.y}
                                                        content={comp.content}
                                            />
                                        )
                                    )
                                ) : (
                                    <p>No components available. Click "Add Component" to create one.</p>
                                )
                            }
                        </Canvas>
                    </div>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>);
};

export default App;
