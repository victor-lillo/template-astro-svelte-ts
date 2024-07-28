<script>
  let count = 0;
</script>

<article>
  Count: {count}
  <div>
    <button type="button" on:click={() => count++}>+</button>
    <button type="button" on:click={() => count--}>-</button>
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: var(--size-spacing-1);
    align-items: center;
  }

  button {
    background: none;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    font-size: 1.7rem;
    background-color: var(--color-accent-1);
    width: 5ch;
    padding: var(--size-spacing-1);
  }

  @media (hover: hover) {
    button:hover {
      border-color: var(--color-primary-light-3);
    }
  }
</style>
