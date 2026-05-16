<script lang="ts">
    import { ROUTES } from "@core/utils/router";
    import { appStore } from "@core/utils/store.svelte";

    let { activePage } = $props();
</script>

<aside
    class="bg-gray-200 dark:bg-gray-800 w-60 flex flex-col gap-2 p-2 transition-colors duration-300"
>
    <div class="p-2">
        <h1 class="text-center font-bold uppercase border-4">Mi Inventario</h1>
    </div>
    {#each ROUTES.filter((route) => route!.public) as route}
        <a
            href={route.path}
            class="text-black text-xl py-2 px-2 bg-gray-300 rounded-md"
            >{route.name}</a
        >
    {/each}

    <div class="p-2 flex justify-center">
        <button
            onclick={() => appStore.toggledarkmode()}
            class="bg-gray-800 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md"
        >
            {appStore.isdarkmode ? "☀️" : "🌙"}
        </button>
    </div>
</aside>
