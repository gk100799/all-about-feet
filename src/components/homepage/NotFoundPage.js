import React from 'react'
import {Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'


function NotFoundPage() {
    return <Result
        status="404"
        title="404"
        subTitle="Sorry, the page is under construction."
        extra={<Button href="https://gk100799.github.io/all-about-feet/#/" type="primary">Back Home</Button>}
      />
}

export default withRouter(NotFoundPage)