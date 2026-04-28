<script lang="ts">
    import { ROUTES } from "@core/utils/router";
    let { activePage } = $props();
</script>

<aside class="w-20 bg-gray-200 flex flex-col gap-2 p-2">
    {#each ROUTES.filter((route) => route!.public) as route}
        <a
            href={route.path}
            class="text-black text-xl p-1 bg-gray-500 rounded-md"
            >{route.name}</a
        >
    {/each}
</aside>
