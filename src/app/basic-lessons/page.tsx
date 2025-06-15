
import Sidebar from "@/components/lesson-components/sidebar"
import Main from "@/components/lesson-components/main"

export default function Lessons() {
  return (

    <main className="container mx-auto flex flex-row gap-4">
      <Sidebar />
      <Main/>
    </main>

  )
}
