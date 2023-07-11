import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MessageItem from '../../components/MessageItem'
import { Message } from '../../models'
import messagesData from '../../../assets/messages'
import { FlatList } from 'react-native-gesture-handler'

const MessageScreen = () => {

  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    setMessages(messagesData)
  }, [messagesData])

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item, index }) => (
          <MessageItem item={item} key={index} />
        )}
      />
    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})