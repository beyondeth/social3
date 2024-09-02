import PostEditor from "@/components/posts/editor/PostEditor";
import TrendsSidebar from "@/components/TrendsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FollowingFeed from "./FollowingFeed";
import ForYouFeed from "./ForYouFeed";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">추천</TabsTrigger>
            <TabsTrigger value="following">팔로잉</TabsTrigger>
          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">
            <FollowingFeed />
          </TabsContent>
        </Tabs>
      </div>
      <TrendsSidebar />
    </main>
  );
}

// export default async function Home() {
//   const posts = await prisma.post.findMany({
//     include: postDataInclude,
//     orderBy: { createdAt: "desc" },
//   });

//   return (
//     <main className="flex w-full min-w-0 gap-5">
//       <div className="w-full min-w-0 space-y-5">
//         <PostEditor />
//         {posts.map((post) => (
//           <Post key={post.id} post={post} />
//         ))}
//       </div>
//       <TrendsSidebar />
//     </main>
//   );
// }
