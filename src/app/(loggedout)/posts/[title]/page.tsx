'use client';
import React, {ReactNode} from 'react'
// import {} from 'next'
import {useRouter} from "next/router";
// import {useRouter} from 'next/navigation'

interface IPostSlugPage {
  params: Record<string, string>
}

type PageParams = Record<string, string>
interface PageProps {
  params?: Record<string, string>
  searchParams?: Record<string, string | string[]>
}
const PostSlugPage = ({params}: PageProps) => {
  
// const PostSlugPage = () => {
  // const router = useRouter()
  // console.log(router)
  // const {title} = router.query
  // console.log(title)
  const title = params?.title
  console.log(params)

  return (
    <div>
      <p>slug123</p>
      <span>slug is <em>{title}</em></span>
    </div>
  )
}

export default PostSlugPage
