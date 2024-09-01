<script>
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit() {
    submitted = true;
  }
</script>

<svelte:head>
  <title>Contact - Dylan Isaac</title>
</svelte:head>

<h1 class="text-4xl font-bold mb-8 text-primary">Contact</h1>

{#if submitted}
  <p class="text-lg mb-4">Thank you for your message. I'll get back to you soon!</p>
{:else}
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    on:submit|preventDefault={handleSubmit}
    class="space-y-4 max-w-lg"
  >
    <input type="hidden" name="form-name" value="contact" />
    
    <div>
      <label for="name" class="block mb-2">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        bind:value={name}
        required
        class="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    
    <div>
      <label for="email" class="block mb-2">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={email}
        required
        class="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    
    <div>
      <label for="message" class="block mb-2">Message</label>
      <textarea
        id="message"
        name="message"
        bind:value={message}
        required
        rows="5"
        class="w-full p-2 border border-gray-300 rounded"
      ></textarea>
    </div>
    
    <button
      type="submit"
      class="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors"
    >
      Send Message
    </button>
  </form>
{/if}