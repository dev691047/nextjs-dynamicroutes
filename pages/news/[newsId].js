import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return <h1>the detail page {newsId}</h1>;
}

export default DetailPage;
