<script lang="ts">
  import type { ComponentType } from 'svelte';

  interface PageData {
    title: string;
    date: string;
    content: ComponentType;
  }

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.title} - Dylan Isaac</title>
</svelte:head>

<article class="prose prose-lg max-w-none dark:prose-invert">
  <h1>{data.title}</h1>
  <p class="text-sm text-gray-500 dark:text-gray-400">Published on {data.date}</p>
  <svelte:component this={data.content} />
</article>

<style>
  :global(.prose) {
    max-width: 65ch;
    margin: 0 auto;
  }

  :global(.prose img) {
    margin-left: auto;
    margin-right: auto;
  }

  :global(.prose code) {
    background-color: var(--color-bg);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.85em;
  }

  :global(.prose pre) {
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
  }
</style>