<script lang="ts">
    const { activePage } = $props();
    import { ROUTES } from "@core/utils/router";
</script>

<aside>
    {#each ROUTES as route}
        <p class="sidebar-item">{route.name}</p>
    {/each}
</aside>
