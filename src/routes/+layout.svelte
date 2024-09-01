<script>
  import '../app.postcss';
</script>

<div class="min-h-screen flex flex-col transition-colors duration-300">
  <header class="bg-primary text-white p-4 shadow-md">
    <nav class="container mx-auto">
      <ul class="flex space-x-4 justify-end">
        <li><a href="/" class="hover:text-accent transition-colors">Home</a></li>
        <li><a href="/about" class="hover:text-accent transition-colors">About</a></li>
        <li><a href="/posts" class="hover:text-accent transition-colors">Posts</a></li>
        <li><a href="/projects" class="hover:text-accent transition-colors">Projects</a></li>
        <li><a href="/speaking" class="hover:text-accent transition-colors">Speaking</a></li>
        <li><a href="/contact" class="hover:text-accent transition-colors">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex-grow container mx-auto px-4 py-8">
    <slot />
  </main>

  <footer class="bg-primary text-white p-4 text-center">
    <div class="container mx-auto">
      © {new Date().getFullYear()} Dylan Isaac
    </div>
  </footer>
</div>