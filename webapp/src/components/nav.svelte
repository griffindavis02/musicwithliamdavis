<script>
    export let current_page;
</script>

<nav class="flex flex-row my-4">
    <h1 class="title basis-1/2 text-4xl font-bold">Music with Liam Davis</h1>
    <div class="nav-links basis-1/2 flex justify-between mb-0">
        <a class="nav-item font-medium" class:underline={current_page=='index'}
            href={current_page=='index' ? "#" : "/"}>Home</a>
        <a class="nav-item font-medium" class:underline={current_page=='shows'}
            href={current_page=='shows' ? "#" : "/shows"}>Upcoming Shows</a>
        <a class="nav-item font-medium" class:underline={current_page=='contact'}
            href={current_page=='contact' ? "#" : "/contact"}>Contact</a>
    </div>
</nav>

<style>

</style>
