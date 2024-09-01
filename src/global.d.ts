declare module '*.md' {
  import type { ComponentType } from 'svelte';
  
  export const metadata: {
    title: string;
    date: string;
  };
  
  const component: ComponentType;
  export default component;
}