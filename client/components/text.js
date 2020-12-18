import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Header from './header'

const Text = () => {
  const [content, setContent] = useState()
  const { userName, repositoryName } = useParams()
  useEffect(() => {
  axios
  .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
  .then((it) => {
  setContent(it.data)
 })
 }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <div id="description">
       <div className="p-10" id="title"><ReactMarkdown source={content} />
     </div> 
   </div>
   </div>
  )
}

Text.propTypes = {}

export default Text