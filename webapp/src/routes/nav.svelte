<script>
    export let current_page;
</script>

<nav class="flex flex-row m-4">
    <h1 class="title basis-1/2 text-3xl bold">Music with Liam Davis</h1>
    <div class="nav-links basis-1/2 flex justify-between mb-0">
        <a class="nav-item" class:underline={current_page=='index'} href="#">Home</a>
        <a class="nav-item" class:underline={current_page=='calendar'} href="#">Calendar</a>
        <a class="nav-item" class:underline={current_page=='songs'} href="#">Song List</a>
        <a class="nav-item" class:underline={current_page=='contact'} href="#">Contact</a>
    </div>
</nav>

<style>

</style>
