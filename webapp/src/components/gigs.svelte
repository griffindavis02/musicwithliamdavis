<script>
    let gig_list;
    let now = new Date();

    const checkCurrentGig = (gigDate, gigStartTime, gigEndTime) => {
        const start = Date.parse(gigDate + ' ' + gigStartTime);
        const end = Date.parse(gigDate + ' ' + gigEndTime);

        return start <= now && now <= end;
    };

    const addToCalendarHandler = (event) => {
        alert('Not implemented!');
    };

    const requestSongHandler = (event) => {
        alert('Not implemented!');
    };

    // query gig list from database
    // assume all of the parsing of date objects into the desired format
    // is done when pushed to db
    gig_list = [
        {
            'venue': 'Ocean House',
            'location': 'Highlands, NJ',
            'date': '2023-10-25',
            'start_time': '8:00 PM',
            'end_time': '11:00 PM',
        },
        {
            'venue': 'Ocean House',
            'location': 'Highlands, NJ',
            'date': '2023-11-14',
            'start_time': '4:00 PM',
            'end_time': '8:00 PM',
        },
        {
            'venue': 'Gramercy Ale House',
            'location': 'New York, NY',
            'date': '2023-12-09',
            'start_time': '8:00 PM',
            'end_time': '12:00 AM',
        },
        {
            'venue': 'Ocean House',
            'location': 'Highlands, NJ',
            'date': '2023-11-14',
            'start_time': '4:00 PM',
            'end_time': '8:00 PM',
        },
        {
            'venue': 'Gramercy Ale House',
            'location': 'New York, NY',
            'date': '2023-12-09',
            'start_time': '8:00 PM',
            'end_time': '12:00 AM',
        }
    ];
</script>

<div class="w-full">
    <h1 class="text-3xl text-center my-10 font-medium">Upcoming Shows</h1>
    <ul>
        {#each gig_list as {venue, location, date, start_time, end_time} }
            <li class="border-b-2 flex p-3 justify-between border-blue-200/50 hover:border-blue-200 duration-150 ease-in-out">
                <div class="basis-1/3">
                    <p>{venue}</p>
                    <p>{new Date(date).toLocaleDateString()}, {start_time} - {end_time}</p>
                </div>
                <div class="basis-1/3 text-center">{location}</div>
                <div class="basis-1/3 flex justify-end">
                    {#if checkCurrentGig(date, start_time, end_time) == true}
                        <button on:click|preventDefault={requestSongHandler} class="ring-blue-200 w-44 bg-blue-200/50 rounded-lg p-3 hover:ring-2 hover:bg-transparent duration-150 ease-in-out">Request a Song</button>
                    {:else}
                        <button on:click|preventDefault={addToCalendarHandler} class="ring-blue-200 w-44 bg-blue-200/50 rounded-lg p-3 hover:ring-2 hover:bg-transparent duration-150 ease-in-out">Add to Calendar</button>
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>

</style>
