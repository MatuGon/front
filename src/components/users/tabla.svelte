<script lang="ts">
    import { onMount } from "svelte";
    let users = $state([{ fullname: "Carla", email: "email@example.com" }]);
    onMount(async () => {
        let data = await fetch("https://dummyjson.com/users").then((res) =>
            res.json(),
        );
        data = await data.json();
        users = data.users;
    });
</script>

<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <tr>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
            </tr>
        {/each}
    </tbody>
</table>
