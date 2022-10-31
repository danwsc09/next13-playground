import React, {ReactNode} from 'react'
import {} from 'next'
import {useRouter} from "next/router";
// import {useRouter} from 'next/navigation'

interface IPostSlugPage {
  params: Record<string, string>
}

const PostSlugPage = () => {
  const router = useRouter()
  const {title} = router.query
  // const {title} = params

  return (
    <div>
      <p>slug123</p>
      <span>slug is <em>{title}</em></span>
    </div>
  )
}

export default PostSlugPage
