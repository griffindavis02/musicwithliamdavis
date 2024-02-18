<script>
    import { onMount } from 'svelte';
    import { initFirebase } from '$lib/firebase';
    import { gigs as gigStore } from '$stores/gigStore.ts';
    
    const populateGigList = () => {
        
    };

    onMount(() => {
        const { app, analyitcs, db, auth } = initFirebase();
        const docRef = db.collection('gigs').doc('2gR8whWKMUY2ogEWdt4V');

        console.log('hello');
        console.log(docRef);

        // gigStore.set(gigs);
    });
</script>

<h1>test</h1>
<slot></slot>
