import { notFound } from "next/navigation";
import ContentPage from "../content-page";
import { pages } from "../site-content";

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const content = pages[slug.join("/")];
  if (!content) notFound();
  return <ContentPage content={content} />;
}
