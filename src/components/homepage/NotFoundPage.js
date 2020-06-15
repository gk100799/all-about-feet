import React from 'react'
import {Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'


function NotFoundPage() {
    return <Result
        status="404"
        title="404"
        subTitle="Sorry, the page is under construction."
        extra={<Button href="/" type="primary">Back Home</Button>}
      />
}

export default withRouter(NotFoundPage)