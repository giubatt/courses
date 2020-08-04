<script>
  let passwords = [];
  let currentPassword = "";
  let id = 0;

  function addPassword(e) {
    const newPassword = {
      value: currentPassword,
      id,
    };

    passwords = [...passwords, newPassword];
    currentPassword = "";
    id += 1;
  }

  function removePassword(deleteId) {
    passwords = passwords.filter(({ id }) => id !== deleteId);
  }
</script>

<input bind:value={currentPassword} />
<button on:click={addPassword}>Add password</button>

{#if currentPassword.length < 5}
  Too short
{:else if currentPassword.length > 10}
  Too long
{:else}
  <p>{currentPassword}</p>
{/if}

<ul>
  {#each passwords as { value, id } (id)}
    <li on:click={() => removePassword(id)}>{value}</li>
  {/each}
</ul>
