<script lang="ts">
    import { ROUTES } from "@core/utils/router";
    let { activePage } = $props();
</script>

<aside>
    {#each ROUTES as route}
        <p class="text-white">{route.name}</p>
    {/each}
</aside>
