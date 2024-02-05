import React from 'react'
import { Card, List } from 'antd';

function Pricing() {
    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
        {
          title: 'Title 5',
        },
        {
          title: 'Title 6',
        },
      ];
    return (
        <div>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title} className='large'>Card content</Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Pricing