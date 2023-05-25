
export default function Post({params}: {params: {missionaryName: string, post: string}}) {

  return (
    <div>Post do missionario {params.missionaryName} - Post: {params.post}</div>
  )
  }
  