<script>
  let count = 0;
</script>

<article>
  Count: {count}
  <div>
    <button on:click={() => count++}>+</button>
    <button on:click={() => count--}>-</button>
  </div>
</article>

<style>
  article {
    color: var(--color-title);
    opacity: 0.8;
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    padding: var(--size-spacing-1);
    display: flex;
    padding: var(--size-spacing-2) var(--size-spacing-3);
    flex-direction: column;
    gap: var(--size-spacing-1);
  }
  button {
    background: none;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    font-size: 1.7rem;
    background-color: #310a65a8;
    width: 5ch;
  }

  @media (hover: hover) {
    button:hover {
      border-color: var(--color-primary-light-3);
    }
  }
</style>
