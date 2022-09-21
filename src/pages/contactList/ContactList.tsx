import { useEffect, useState } from 'react';

import { Avatar, Button, List, Typography } from 'antd';

import { CONTACTS_URL } from '../../shared/contacts';

import styles from './contactList.module.css';

const { Title } = Typography

type ContactItem = {
  name: string,
  phone: string
  email: string,
  avatar: string,
  id: string,
  userName: string
}

export const ContactList = () => {
  const [contactList, setContactList] = useState<ContactItem[]>([])

  useEffect(() => {
    fetch(CONTACTS_URL)
      .then(response => response.json()
        .then(contacts => setContactList(contacts)))
  }, [])

  return (
    <div className={styles.contactList}>
      <Title>
        Список контактов
      </Title>
      <List
        bordered
        itemLayout="horizontal"
        dataSource={contactList}

        renderItem={item => (
          <List.Item actions={[
            <Button key="list-loadmore-edit">
              edit
            </Button>,
            <Button key="list-loadmore-more">
              more
            </Button>
          ]}>

            <List.Item.Meta
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                />
              }
              title={item.userName}

              description={item.phone}
            />

          </List.Item>
        )} />

      <br></br>

      <Button type="primary" className={styles.adn__btn}>
        ADD CONTACT
      </Button>
    </div >
  )
}
