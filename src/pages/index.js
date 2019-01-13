import React from 'react'
import {
  Layout
} from '../components'
import Typography from '@material-ui/core/Typography'

const IndexPage = (props) => {
  return (
    <Layout title='Home' activePage={props.pageResources.page.path} >
      <Typography>Hello</Typography>
    </Layout>
  )
}

export default IndexPage
