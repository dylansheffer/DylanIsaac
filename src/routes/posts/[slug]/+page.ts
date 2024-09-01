import type { PageLoad } from './$types';

interface PostMetadata {
  title: string;
  date: string;
}

interface PostModule {
  metadata: PostMetadata;
  default: any; // This represents the Svelte component
}

export const load: PageLoad = async ({ params }) => {
  try {
    const post: PostModule = await import(`../${params.slug}.md`);
    const { title, date } = post.metadata;
    const content = post.default;

    return {
      content,
      title,
      date,
    };
  } catch (error) {
    console.error(`Error loading post: ${params.slug}`, error);
    return {
      status: 404,
      error: new Error(`Could not find post ${params.slug}`),
    };
  }
};