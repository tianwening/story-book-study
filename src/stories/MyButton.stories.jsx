import React from 'react'
import { MyButton } from './MyButton'

export default {
    title: 'Example/MyButton',
    component: MyButton,
}

const Template = (args) => <MyButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
    primary: true,
    label: '自定义的按钮',
    count: 1,
    backgroundColor: 'grey'
}

export const Plain = Template.bind({})

Plain.args = {
    primary: true,
    label: '自定义的按钮',
    count: 1,
    backgroundColor: 'grey'
}