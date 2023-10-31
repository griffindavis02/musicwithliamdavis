<script>
    let gig_list;

    const editGigHandler = (event) => {
        alert('Not implemented!');
    }

    const trashGigHandler = (event) => {
        alert('Not implemented!');
    }

    // FIXME re-implement age-check for what goes in the upcoming shows list
    // vs. what is edited/removed through modals

    // query gig list from database
    // assume all of the parsing of date objects into the desired format
    // is done when pushed to db
    gig_list = [
        {
            'venue': 'Ocean House',
            'location': 'Highlands, NJ',
            'date': '2023-10-25',
            'startTime': '8:00 PM',
            'endTime': '11:00 PM',
        },
        {
            'venue': 'Ocean House',
            'location': 'Highlands, NJ',
            'date': '2023-11-14',
            'startTime': '4:00 PM',
            'endTime': '8:00 PM',
        },
        {
            'venue': 'Gramercy Ale House',
            'location': 'New York, NY',
            'date': '2023-12-09',
            'startTime': '8:00 PM',
            'endTime': '12:00 AM',
        },
        {
            'venue': 'Ocean House',
            'location': 'Highlands, NJ',
            'date': '2023-11-14',
            'startTime': '4:00 PM',
            'endTime': '8:00 PM',
        },
        {
            'venue': 'Gramercy Ale House',
            'location': 'New York, NY',
            'date': '2023-12-09',
            'startTime': '8:00 PM',
            'endTime': '12:00 AM',
        }
    ];

</script>

<div class="w-full">
    <h1 class="text-3xl text-center my-10 font-medium">Edit/Remove Upcoming Shows</h1>
    <ul>
        {#each gig_list as {venue, location, date, startTime, endTime, gigAge} }
            <li class="border-b-2 flex p-3 justify-between border-blue-200/50 hover:border-blue-200 duration-150 ease-in-out">
                <div class="basis-1/3">
                    <p>{venue}</p>
                    <p>{new Date(date).toLocaleDateString()}, {startTime} - {endTime}</p>
                </div>
                <div class="basis-1/3 text-center">{location}</div>
                <div class="basis-1/3 flex justify-end">
                    <button on:click|preventDefault={editGigHandler}><div class="icon edit-icon"></div></button>
                    <button on:click|preventDefault={trashGigHandler}><div class="icon trash-icon"></div></button>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>

    .icon {
        margin: 0 1rem;
        background-color: var(--fontColor);
        opacity: 100%;
        height: 1.5rem;
        width: 1.5rem;
    }

    .icon:hover {
        background-color: var(--accentLight);
        opacity: 50%;
        transition-timing-function: ease-in-out;
        transition-duration: 150ms;
    }

    .edit-icon {
        -webkit-mask: url(edit.svg) no-repeat center;
        mask: url(edit.svg) no-repeat center;
    }

    .trash-icon {
        -webkit-mask: url(trash.svg) no-repeat center;
        mask: url(trash.svg) no-repeat center;
    }

</style>
